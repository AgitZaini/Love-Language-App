const express = require("express");
const { errorHandler } = require("./middlewares/errorHandler");
const app = express();
const cors = require("cors");
const router = require("./routes");
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});

module.exports = app;
