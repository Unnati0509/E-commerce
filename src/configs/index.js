const dotenv = require('dotenv');

dotenv.config();

const nodeEnv = process.env.NODE_ENV || 'production';
const port = parseInt(process.env.PORT, 10) ;
const secret = process.env.SESSION_SECRET;

module.exports = {
    nodeEnv,
    port,
    secret,
};
