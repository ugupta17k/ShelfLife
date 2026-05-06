const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  ItemsName: {
    type: String,
    required:true
  },
  HouseHoldId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HouseHold",
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    enum: ["produce", "dairy", "meat", "pantry", "frozen", "other"],
  },
  quantity: Number, // default 1
  expiryDate: Date, // required
  status: {
    type :  String,
    enum: ["fresh", "expiring-soon", "expired", "used", "wasted"]
  },
  createdAt: Date,
  updatedAt: Date,
});

const itemsModel = mongoose.model("items" , itemsSchema)

module.exports = {
    itemsModel
}