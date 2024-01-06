const router = require("express").Router();

const { pageNotFoundErr } = require("../controllers/error");

router.all("*", pageNotFoundErr);
module.exports = router;
