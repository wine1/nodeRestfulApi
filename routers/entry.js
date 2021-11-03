const Router = require("koa-router");
const router = new Router();
const entry = require("../controllers/entry");

router.get("/init", entry.EntryData);
module.exports = router;
