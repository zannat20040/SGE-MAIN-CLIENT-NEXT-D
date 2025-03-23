const mongoose = require("mongoose");

const enquireSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  markAsRead: { type: Boolean, default: false },
  notes: [
    {
      note: String,
      timestamp: { type: Date, default: Date.now }
    }
  ],
  status: [
    {
      status: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

const Enquire = mongoose.model("Enquire", enquireSchema);
module.exports = Enquire;
