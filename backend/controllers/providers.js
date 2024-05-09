const providers = require('../models/providers')

//LIST
module.exports.list=function(req,res){
    res.render('providers/providers-list',{ title:'Service Providers',
        providers:providers
    })
}
//DETAILS
module.exports.details=function(req,res){
    let id= req.params.id;
    let provider = providers.find( provider => provider.id==id)
    res.render('providers/providers-details',{ id:id,title:'Service Providers Details',
        company : provider.company
    })
}
//EDIT
module.exports.edit=function(req,res){
    let id= req.params.id;
    let provider = providers.find( provider => provider.id==id)
    res.render('providers/providers-edit',{ id:id,title:'Edit Providers',
        provider : provider
    })
}
//UPDATE
module.exports.update=function(req,res){
    let id= req.params.id;
    let provider = providers.find( provider => provider.id==id)
    provider.firstname=req.body.firstname;
    provider.lastname=req.body.lastname;
    provider.position=req.body.position;
    provider.company.company_name=req.body.company_name;
    provider.company.address=req.body.address;
    provider.company.address2=req.body.address2;
    provider.company.city=req.body.city;
    provider.company.state=req.body.state;
    provider.company.phone=req.body.phone;
    provider.company.postal_code=req.body.postal_code;
    provider.company.email=req.body.email;
    provider.company.description=req.body.description;
    provider.company.tagline=req.body.tagline;
    res.render('providers/provider-update',{ title:'Update Providers',
        provider : provider
    })
}
//ADDFORM
module.exports.addform=function(req,res){
    res.render('providers/providers-add-form',{ title:'Add'
    })
}
//ADD
module.exports.add=function(req,res){
    let min = 100000;
    let max = 999999;
    let id = Math.floor(Math.random()*(max-min)+min);
    //create new provider object
    let provider = {
        id:id,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    position:req.body.position,
    company:{
    company_name:req.body.company_name,
    address:req.body.address,
    address2:req.body.address2,
    city:req.body.city,
    state:req.body.state,
    phone:req.body.phone,
    postal_code:req.body.postal_code,
    email:req.body.email,
    description:req.body.description,
    tagline:req.body.tagline,
    }
    }
    //Add new provider to list
    providers.push(provider)
    res.render('providers/providers-add',{ title:'Added',
        provider : provider
    })
}

//DELETE
module.exports.delete=function(req,res){
    let id= req.params.id;
    let provider = providers.find( provider => provider.id==id)
    let company=provider.company.company_name;
    let idx = providers.indexOf(provider);
    //remove element using index
    providers.splice(idx,1);
    res.render('providers/providers-delete',{title:'Delete Providers',
        company : company
    })
}