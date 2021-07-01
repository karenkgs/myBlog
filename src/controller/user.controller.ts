import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createUser } from '../service/user.service';
import log from '../logger';
import { INTERNAL_ERROR_RESPONSE_CODE } from '../constants';

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), 'password'));
    } catch (e) {
        log.error(e);
        return res.status(INTERNAL_ERROR_RESPONSE_CODE).send(e.message);
    }
}
