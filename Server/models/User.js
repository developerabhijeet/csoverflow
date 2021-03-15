const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator')

let userSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true,
    minlength:6  
  },
  bio:{
    type: String,
    required: true
  },
  jobtitle:{
    type: String,
    required: true
  },
  techdomain:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
   dateofbirth:{
     type: String,
     required: true
}
},
   {
     timestamps: true,
     collection:'user'
})

module.exports = mongoose.model('User', userSchema);
