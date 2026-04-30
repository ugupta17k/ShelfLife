const mongoose = require("mongoose");
const { UserModel } = require("./UserSchema");

const HouseholdSchema = new mongoose.Schema({
  HouseHoldName: String,
  inviteCode: {
    type: String,
    unique: true,
  },
  member: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  wasteScore: {
    type: String,
    default: 0,
  },
  createdAt: Date,
});

const HouseHoldModel = mongoose.model("HouseHold", HouseholdSchema);

module.exports = {
  HouseHoldModel,
};
