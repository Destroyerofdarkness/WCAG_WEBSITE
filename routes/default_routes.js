const router = require("express").Router();

const controller = require("../controllers/default_controller")


router.get("/home",controller.homepage_render)

router.get("/", controller.home_redirect)

module.exports = router