const mongoose = require("mongoose");

const AttendeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide valid email",
      ],
      unique: true,
    },
    _talkId: {
      type: mongoose.Types.ObjectId,
      ref: "Talk",
    },
    talkTitle: {
      type: String,
      ref: "Talk",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendee", AttendeeSchema);
