const router = require("express").Router();

const controller = require("../controllers/default_controller")


router.get("/home",controller.homepage_render)

router.get("/", controller.home_redirect)

router.get("/cat/:name", controller.render_catPage)

router.get("/randomCat", controller.random_cat)

module.exports = router