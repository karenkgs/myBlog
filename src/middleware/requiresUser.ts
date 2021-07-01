import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { FORBIDDEN_RESPONSE_CODE } from '../constants';

const requiresUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = get(req, 'user');
    if (!user) {
        return res.sendStatus(FORBIDDEN_RESPONSE_CODE);
    }

    return next();
};

export default requiresUser;
