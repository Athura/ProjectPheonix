const HTTPStatus = require('http-status');
const APIError = require('../errors/api-error');
const UserService = require('../services/user-service');
const loadUserFromHeaders = require('../middleware/load-current-user');

export default {
    async createUser(req, res) {
        const user = await UserService.create({ ...req.body, id: req.user.UID, email: req.user.ssoUserName });
        res.status(HTTPStatus.CREATED).json(user);
    },
     async getUser(req, res) {
         res.json(req.user);
     },
     async updateUser(req, res) {
         const updatedUser = await UserService.update(req.user, req.body);
         res.json(updatedUser);
     },
     async load(req, res, next, userId) {
         if(userId === 'me') {
             const user = await loadUserFromHeaders(req);
             if(!user) {
                 next(new APIError('USER_NOT_FOUND', { ssoUserName: req.user.ssoUserName }));
             } else {
                 req.user = user;
                 next();
             }
         } else {
             const user = await UserService.loadOne({ id: userId });
             if(user) {
                 req.user = user;
                 next();
             } else {
                 next(new APIError('NOT_FOUND', { userId }));
             }
         }
     }
};