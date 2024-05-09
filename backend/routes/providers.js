var express = require('express');
var router = express.Router();
const providersController = require('../controllers/providers');
/* GET home page. */
router.get('/', providersController.list);
/* GET details page. */
router.get('/details/:id', providersController.details);
/* GET edit page. */
router.get('/edit/:id', providersController.edit);
/* POST Update page. */
router.post('/update/:id', providersController.update);
/*GET Add page*/
router.get('/add-provider', providersController.addform);
/* POST Add page. */
router.post('/add', providersController.add);
/*GET Delete page*/
router.get('/delete/:id', providersController.delete);
module.exports = router;
