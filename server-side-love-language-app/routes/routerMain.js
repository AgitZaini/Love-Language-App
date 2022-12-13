const mainRouter = require("express").Router();
const MainController = require("../controllers/mainController");
const { authentication, authorization } = require("../middlewares/authentication");

mainRouter.get("/soals", MainController.getSoals);
// mainRouter.get("/soalsResult", authentication, MainController.postResult);
mainRouter.get("/resultUser", authentication, MainController.getResult)
mainRouter.post("/result", authentication, MainController.postResult);
mainRouter.get("/types", MainController.getTypeLoveLanguage)
mainRouter.delete("/deleteResult", authentication, authorization, MainController.deleteResult)

module.exports = mainRouter;
