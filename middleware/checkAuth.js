const jwt = require('jsonwebtoken');

function checkAuth(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1]; //bearer Token
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decodedToken;
        next();
    }catch(e){
        return res.status(401).json({
            'message': "Invalid or expided token provided!",
            'error':e
        });
    }
}

function allowRoles(...roles) {
    return (req, res, next) => {
        if (!req.userData || !roles.includes(req.userData.role)) {
            return res.status(403).json({ message: "Sin permiso" });
        }
        next();
    };
}

module.exports = {
    checkAuth,
    allowRoles
};
