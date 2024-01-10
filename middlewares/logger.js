// @desc      Logging incoming reques method and URL
// @middleware  loggerMiddleware
// @file      middleware/logger.js
module.exports = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};
console.log('custom loggerMiddleware is working');
