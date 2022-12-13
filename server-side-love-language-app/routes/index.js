const router = require("express").Router();
const routerAuth = require("./routerAuth");
const routerMain = require("./routerMain");

router.use("/", routerAuth);
router.use("/main", routerMain);

module.exports = router;
