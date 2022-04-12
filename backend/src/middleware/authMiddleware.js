const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const authMiddleware = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    }
    const { authorization } = req.headers;

    const [, token] = authorization.split(' ');

    if (!token) {
        console.log(req.headers);
        return res.status(403).json({ message: 'User is unauthorized no token' });
    }
    try {
        const decodedData = jwt.verify(token, secret);
        req.user = decodedData;
        next();
    } catch (err) {
        console.log(err);
        return res.status(403).json({ message: 'User is unauthorized err' });
    }
};

module.exports = { authMiddleware };
