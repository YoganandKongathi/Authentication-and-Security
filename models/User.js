require('dotenv').config()
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption')
const {Schema, model} = mongoose

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password'] })

const User = model('User', userSchema)

module.exports = User