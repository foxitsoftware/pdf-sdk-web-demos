var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    licenseSN: process.env.LICENSE_SN,
    licenseKey: process.env.LICENSE_KEY,
  });
});

module.exports = router;
