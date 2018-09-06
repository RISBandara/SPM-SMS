const mongoose = require("../DBSchema/SchemaMapper");
const FormI_3Schema = mongoose.model('FormI_3');

var FormI_3Controller = function(){

    this.addFormData = (data) =>{
        return new Promise((resolve ,reject)=>{
            FormI_3Schema.create(data).then((res)=>{
                resolve({status:200,message:'Successfully added new formI-3 data',data:res});
            }).catch(err=>{
                reject({status:500,message:'Err '+err});
            })
        });
    }

    this.getFormDatabySupId = (id) =>{
        return new Promise((resolve ,reject)=>{
            FormI_3Schema.find({sup_id:id}).exec().then((data)=>{
                resolve({status:200,data:data});
            }).catch(err=>{
                reject({status:500,message:'Err '+err});
            })
        });
    }

    this.attest = (id,data) =>{
        return new Promise((resolve ,reject)=>{
            FormI_3Schema.findOneAndUpdate({_id:id},data).exec().then(()=>{
                resolve({status:200,data:"Successfully attested."});
            }).catch(err=>{
                reject({status:500,message:'Err '+err});
            })
        });
    }

}

module.exports = new FormI_3Controller();