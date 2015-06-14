// Initializes a new router.
var router = require("express").Router();

// References the others routers.
var routers = {
    index: require("./index"),
    download: require("./download")
};

// Sets the routers.
router.use("/", routers.index); // Index.
router.use("/download", routers.download); // Next.

// Any other page redirects to index.
router.get("/:error", function (request, response) {
    response.sendStatus(404);
});

module.exports = router;