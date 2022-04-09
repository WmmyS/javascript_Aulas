exports.middlewareGlobal = (req, res, next) => {
    console.log('Middleware exemplo');
    next();
}