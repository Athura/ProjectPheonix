// This middleware is used to get the user object
export default async (req, res, next) => {
    if (req.user) {
        req.user = { ...req.user, UID: req.user.id };
    }
    next();
}