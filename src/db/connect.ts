import mongoose from 'mongoose';
import log from '../logger';
import config from 'config';

function connect() {
    const dbUri = config.get('dbUri') as string;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            log.info('Database connected');
        })
        .catch(error => {
            log.error('db error', error);
            process.exit(1);
        });
}

export default connect;
