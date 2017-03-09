const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  topic: { type: String, unique: true },
  things: [{ 
    name: String,
    description: String,
    icon: String,
    type: String,
    topic: String,
    unit: String,
    minimumValue: String,
    maximumValue: String,
    step: String
  }]
});

//OnSaveHook, encrypt password
//before saving model run this section
userSchema.pre('save', function(next) {
//get access to user model
  const user = this;

  //generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err); }

    //hash our pass using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err);}

      //overwrite plain text password with hash
      user.password = hash;
      next();
    })
  })
});

//this method will be reachable from every userSchema
//porownywanie hasła otrzymanego z hashowanym w bazie
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) { return callback(err);}

    callback(null, isMatch);
  })
}

//Create the model class
const ModelClass = mongoose.model('user', userSchema);

//Export the model
module.exports = ModelClass;