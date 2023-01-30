const mongoose = require("mongoose");

const TalkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide talk title"],
      maxlength: 100,
    },
    speaker: {
      type: String,
      required: [true, "Please provide speaker's name"],
      minlength: 3,
      maxlength: 50,
    },
    capacity: {
      type: Number,
      required: [true, "Please provide capacity"],
      minlength: 3,
    },
  },
  { timestamps: true }
);

TalkSchema.pre("remove", async function () {
  await this.model("Attendee").deleteMany({ _talkId: this._id });
});

module.exports = mongoose.model("Talk", TalkSchema);
