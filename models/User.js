const mongoose = require('mongoose');
const {Schema, model} = mongoose
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

userSchema.plugin(passportLocalMongoose)
const User = model('User', userSchema)

module.exports = User