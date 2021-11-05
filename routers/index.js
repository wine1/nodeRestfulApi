const Router = require("koa-router");
const router = new Router();
const { apiPrefix } = require("../config/index");
const shopping = require("./shopping");
const cart = require("./cart");
const entry = require("./entry");
const init = require("./initData");
const user = require("./user");

router.prefix(apiPrefix);
router.use("/init", init.routes(), init.allowedMethods());
router.use("/shopping", shopping.routes(), shopping.allowedMethods());
router.use("/cart", cart.routes(), cart.allowedMethods());
router.use("/entry", entry.routes(), entry.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());
module.exports = router;
