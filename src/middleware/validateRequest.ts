import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';
import log from '../logger';
import { BAD_REQUEST_RESPONSE_CODE } from '../constants';

const validate = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        return next();
    } catch (e) {
        log.error(e);
        return res.status(BAD_REQUEST_RESPONSE_CODE).send(e.errors);
    }
};

export default validate;
