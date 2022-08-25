const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminDetailSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  admin_id: { type: String, unique: true },
  username: { type: String, unique: true },
  password: { type: String, required: true },
});

const AdminDetail = new mongoose.model("AdminDetail", adminDetailSchema);
module.exports = AdminDetail;
