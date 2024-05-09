const mongoose = require('mongoose');
const {Provider} = require('../models/provider');
//connection URI to MongoDB
const uri = 'mongodb://127.0.0.1:27017/provider_db';

//make db connection (asynchoronously)
mongoose.connect(uri)
    .then(result =>{
        console.log('Successful connection!!',result)
    }).catch(error =>console.log(error));
// Provider.create({
//     "firstname": "Kalil",
//         "lastname": "Shemilt",
//         "position": "Environmental Specialist",
//         "company": {
//             "company_name": "Kwilith",
//             "address": "238 Johnson Circle",
//             "address2": "",
//             "city": "Philadelphia",
//             "state": "PA",
//             "postal_code": "19141",
//             "phone": "215-802-3967",
//             "email": "shemiltk@kwilith.com",
//             "description": "Mandatory Logistical Software",
//             "tagline": "Deploy Turn-Key Portals"
//         }
// })
    module.exports=Provider;