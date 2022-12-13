const { verify } = require("../helpers/jwt");
const { User, UserResult } = require("../models");
module.exports = {
    async authentication(req, res, next) {
        try {
            const { access_token } = req.headers;
            console.log(access_token, "TOKEN Auth");
            if (!access_token) {
                throw { status: 400, message: "Please Login First", code:0  };
            }
            const decode = verify(access_token);
            let user = await User.findOne({ where: { email: decode.email } });
            console.log(user, "INI USER");
            if (!user) {
                throw { status: 401, message: "Not Authenticated" , code: 0};
            } else {
                req.user = { id: user.id, name: user.name };
                console.log(req.user, "OKE ADA");
                next();
            }
        } catch (error) {
            next(error);
        }
    },
    async authorization(req, res, next){
        try {
            const {id} = req.user
            const checking = await UserResult.findOne({where:{UserId:id}})
            console.log(checking);
            if(!checking){
                throw {status: 401, message: "Not Authorized"} 
            }else{
                console.log("Success");
                next()    
            }
        } catch (error) {
            next(error)
        }
    }
};
