const Router = require("koa-router");
const router = new Router();
const user = require("../controllers/user");
router.post("/registry", user.registry).post("/login", user.login);
module.exports = router;
