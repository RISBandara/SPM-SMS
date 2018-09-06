const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignSchema = new Schema({

  supname:{  type:String  },
  stdname:{type:String},
  date:{type:Date},
	position:{type:String  },
  email:{type:String},
  compname:{type:String},
  project:{type : String},
  duration:{type : Number}



});
const UserDB = mongoose.model('schema',AssignSchema);
module.exports=UserDB;
