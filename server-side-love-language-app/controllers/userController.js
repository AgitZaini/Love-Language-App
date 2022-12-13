const { comparePassword } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");
const { User } = require("../models");
class UserController {
    static async palindrome(req, res, next) {
        try {
            const { kata } = req.body;
            let result;
            function check(name) {
                if (name == name.split("").reverse().join("")) {
                    return (result = "OKE");
                } else {
                    return (result = "NO");
                }
            }
            check(kata);
            res.status(201).json({ result });
        } catch (error) {
            next(error);
        }
    }
    static async register(req, res, next) {
        try {
            const { name, email, password } = req.body;
            const userHasRegistered = await User.findOne({
                where: { email: email },
            });
            if (!userHasRegistered) {
                const newUser = await User.create({
                    name,
                    email,
                    password,
                });
                const access_token = sign({ email: newUser.email });
                res.status(201).json({ access_token });
            } else {
                throw {
                    status: 400,
                    message: "This email has been registered",
                };
            }
        } catch (error) {
            next(error);
        }
    }
    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({
            where: {
                email: email,
            },
        })
            .then((data) => {
                if (!data) {
                    throw {
                        status: 401,
                        message: "Invalid email or password",
                    };
                } else {
                    if (comparePassword(password, data.password) == true) {
                        const access_token = sign({ email: email });
                        res.status(200).json({ access_token, name: data.name, email: data.email });
                    } else {
                        throw {
                            status: 401,
                            message: "Invalid email or password",
                        };
                    }
                }
            })
            .catch((error) => next(error));
    }
}

module.exports = UserController;
