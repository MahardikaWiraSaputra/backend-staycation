const router = require('express').Router(); // menggunakan router dari express
const apiController = require('../controllers/apiController');
const { upload} = require('../middlewares/mutler')

router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailPage);
router.post('/booking-page', upload, apiController.bookingPage);

module.exports = router;