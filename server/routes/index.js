const path = require("path");
const router = require("express").Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
