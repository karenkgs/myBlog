import config from 'config';
import { get } from 'lodash';
import { Request, Response } from 'express';
import { loginUser } from '../service/user.service';
import { createSession, createAccessToken, updateSession, findSessions } from '../service/session.service';
import { sign } from '../utils/jwt.utils';
import { UNAUTHORIZED_RESPONSE_CODE, SUCCESS_RESPONSE_CODE } from '../constants';

export async function createUserSessionHandler(req: Request, res: Response) {
    const user = await loginUser(req.body);

    if (!user) {
        return res.status(UNAUTHORIZED_RESPONSE_CODE).send('Invalid username or password');
    }

    const session = await createSession(user._id, req.get('user-agent') || '');
    const accessToken = createAccessToken({
        user,
        session,
    });
    const refreshToken = sign(session, {
        expiresIn: config.get('refreshTokenTtl'),
    });

    // send refresh & access token back
    return res.send({ accessToken, refreshToken });
}

export async function invalidateUserSessionHandler(req: Request, res: Response) {
    const sessionId = get(req, 'user.session');

    await updateSession({ _id: sessionId }, { valid: false });

    return res.sendStatus(SUCCESS_RESPONSE_CODE);
}

export async function getUserSessionsHandler(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    const sessions = await findSessions({ user: userId, valid: true });

    return res.send(sessions);
}
