import User from "../Model/User.js";

export default {
    loginByEmail: async function (req, res, next) {
        try {
            const isAuthenticated = await User.isAuthenticated(req.body.email, req.body.password);
            if(isAuthenticated){res.send("authentication successful")}
            else {
                res.send("authentication failed")
            }
        } catch (error) {
            next(error);
        }
    },
}