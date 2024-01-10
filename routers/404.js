const router = require("express").Router();

const { pageNotFoundErr } = require("../controllers/error");

// @desc      For 404-Not found page 
// @route     /*
// @controller   error.pageNotFoundErr
// @file      routes/404.js
router.all("*", pageNotFoundErr);
module.exports = router;
