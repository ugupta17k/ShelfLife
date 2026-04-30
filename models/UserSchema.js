const mongoose = require("mongoose")
const {HouseHoldModel} = require("./HouseholdSchema")

const UserSchema = new mongoose.Schema({
    
    name: String,
    email : String,
    password : String,
    HouseHoldId : {
        type: mongoose.Types.ObjectId,
        ref:'HouseHold'
    },
    createdAt : Date   

})

const UserModel = mongoose.model('user', UserSchema)

module.exports = {
    UserModel
}