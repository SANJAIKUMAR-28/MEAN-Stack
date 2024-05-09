var express = require('express');
var router =express.Router();
const mainController=require('../controllers/main.controller');

//HTTP Verbs: POST,GET,PUT,DELETE

//POST /api/providers
router.post('/providers',mainController.create);

//GET api/providers
router.get('/providers',mainController.readAll);

//GET One api/providers
router.get('/providers/:id',mainController.readOne);

//POST /api/providers
router.put('/providers/:id',mainController.update);

//DELETE one /api/providers
router.delete('/providers/:id',mainController.deleteOne);

//DELETE all/api/providers
router.delete('/providers',mainController.deleteAll);

//No matching api endpoints
router.post('/*',notFound)
router.get('/*',notFound)
router.put('/*',notFound)
router.delete('/*',notFound)
function notFound(req,res){
    res.status(400);
    res.send('Not Valid Endpoint');
}
module.exports=router;
