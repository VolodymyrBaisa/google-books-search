const path = require("path");
const router = require("express").Router();
const apiRouter = require("./api");

//Api routes
router.use("/api", apiRouter);

//HTML routes
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
