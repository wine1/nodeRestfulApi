const Router = require("koa-router");
const router = new Router();
const user = require("../controllers/user");

router.post("/registry", user.addUser).post("/login", user.getUser);
module.exports = router;
