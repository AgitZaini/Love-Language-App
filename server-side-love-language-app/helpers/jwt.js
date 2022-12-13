const jwt = require("jsonwebtoken");

module.exports = {
    sign(payload) {
        return jwt.sign(payload, "rahasia");
    },
    verify(token) {
        return jwt.verify(token, "rahasia");
    },
};
