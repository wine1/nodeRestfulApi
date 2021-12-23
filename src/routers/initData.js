const Router = require("koa-router");
const router = new Router();

const initController = require("../controllers/initData");

router.get("/initdata", initController.initData);

module.exports = router;
