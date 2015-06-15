// Initializes a new router.
var router = require("express").Router();

// Imports the controllers.
var controllers = {
	index: require("../controllers/index"),
	portuguese: require("../controllers/portuguese"),
	english: require("../controllers/english"),
	download: require("../controllers/download"),
};

// Root page.
router.get("/", controllers.index.index);

// Portuguese version.
router.get("/pt", controllers.portuguese.index);
router.get(/(^\/pt-..$|^\/por(t(u(g(u(e(se?)?)?)?)?)?)?$)/i, controllers.portuguese.redirect);
router.get("/pt/download/curriculum", controllers.download.curriculum("pt"));
router.use("/pt/:error", controllers.portuguese.redirect);

// English version.
router.get("/en", controllers.english.index);
router.get(/(^\/en-..$|^\/eng(l(i(sh?)?)?)?$)/i, controllers.english.redirect);
router.get("/en/download/curriculum", controllers.download.curriculum("en"));
router.use("/en/:error", controllers.english.redirect);

// Any other page redirects to index.
router.get("/:error", controllers.index.redirect);

module.exports = router;