const APIError = require('../errors/api-error');
const UserService = require('../services/user-service');

const loadUserFromHeaders = async req => UserService.loadOne({ email: req.user.ssoUserName });

export { loadUserFromHeaders };

export default async (req, res, next) => {
    if(!req.user || !req.user.ssoUserName) {
        next(new APIError('UNAUTHORIZED'));
    } else {
        try {
            const user = await loadUserFromHeaders(req);
            if (user) {
                req.user = user;
                next();
            } else {
                next(new APIError('USER_NOT_FOUND', { ssoUserName: req.user.ssoUserName }));
            }
        } catch (err) {
            next(err);
        }
    }
}