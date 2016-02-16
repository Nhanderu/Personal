// Initializes a new router.
var router = require("express").Router();

// Imports the controllers.
var controllers = {
	index: require("../controllers/index"),
	download: require("../controllers/download")
};

// Root page.
router.get("/", controllers.index.index);

// Portuguese version.
var pt = "/pt";
router.get(pt, controllers.index.pt);
router.get(/(^\/pt-..$|^\/por(t(u(g(u(e(se?)?)?)?)?)?)?$)/i, controllers.index.redirect(pt));
router.get(pt + "/download/curriculum", controllers.download.curriculum("pt"));
router.use(pt + "/:error", controllers.index.redirect(pt));

// English version.
var en = "/en";
router.get(en, controllers.index.en);
router.get(/(^\/en-..$|^\/eng(l(i(sh?)?)?)?$)/i, controllers.index.redirect(en));
router.get(en + "/download/curriculum", controllers.download.curriculum("en"));
router.use(en + "/:error", controllers.index.redirect(en));

// Any other page redirects to index.
router.get("/:error", controllers.index.redirect("/"));

module.exports = router;