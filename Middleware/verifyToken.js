const verifyToken = (req, res, next) => {
    console.log(req.body.token);
    next();
};

export default verifyToken;