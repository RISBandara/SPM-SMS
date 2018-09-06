const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema =new Schema({

    stu_id:{
        type:String,
        required:true
    },
    company_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
    },
    comp_name:{
                type:String
    },
    supervisor_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Supervisor'
        },
    stu_name:{
        type: String,
        required:true
    },
    address:{
            type:String,
            required:true
    },
    year:{
        type:String,
        required:true
    },
    semester:{
            type:String,
            required:true
        },
    e_mail:{
        type:String,
        required:true
    },
    home_phone:{
        type:String
    },
    mobile:{
            type:String,
            required:true
        },
    cgpa:{
            type:String,
            required:true
        }
});

const CompanySchema =new Schema({

    name:{
        type:String,
        required:true
    },
    address:{
            type:String,
            required:true
        },
    e_mail:{
            type:String,
            required:true
        }
});

const SupervisorSchema =new Schema({

});

const Form_I3Schema = new Schema({

    stu_id: {
        type: String,
        required: true
    },
    "sup_id": {
        type: String,
        required: true
    },
    "month": {
        type: String,
        required: true
    },
    "summery": {
        type: String,
        required: true
    },
    "detail": {
        type: String,
        required: true
    },
    "status": {
        type: Boolean
    },
    "sup_remark": {
        type: String
    },
    "attest_date": {
        type: String
    },

});

mongoose.model('Student',StudentSchema);
mongoose.model('Company',CompanySchema);
mongoose.model('FormI_3',Form_I3Schema);


mongoose.connect('mongodb://localhost/sms',(err)=>{

    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log('connect to db.');
});

module.exports=mongoose;