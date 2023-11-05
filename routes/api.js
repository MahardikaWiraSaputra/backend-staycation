const router = require('express').Router(); // menggunakan router dari express
const apiController = require('../controllers/apiController');

router.get('/landing-page', apiController.landingPage);

module.exports = router;