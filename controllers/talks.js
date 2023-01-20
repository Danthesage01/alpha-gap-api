const Talks = require("../models/Talks");
const Attendees = require("../models/Attendees");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const addTalk = async (req, res) => {
  const talk = await Talks.create(req.body);
  res.status(StatusCodes.CREATED).json({ talk });
};

const getTalks = async (req, res) => {
  const talks = await Talks.find({});
  res.status(StatusCodes.OK).json({ talks });
};

const addAttendeeToTalk = async (req, res) => {
  const talk = await Talks.findById({ _id: req.params.talkId });
  if (req.params.talkId != talk._id) {
    throw new NotFoundError(`No talk with id`);
  }
  req.body._talkId = req.params.talkId;
  req.body.talkTitle = talk.title;
  const attendee = await Attendees.create(req.body);
  res.status(StatusCodes.CREATED).json({ attendee });
};

const getAttendeesOfATalk = async (req, res) => {
  const attendees = await Attendees.find({ _talkId: req.params.talkId });
  const talk = await Talks.findOne({ _id: req.params.talkId });

  if (!talk) {
    throw new NotFoundError(
      `Talk with id:${req.params.talkId} no longer exist`
    );
  }
  if (attendees.length <= 0) {
    throw new NotFoundError(`No attendees yet for this talk`);
  }

  res.status(StatusCodes.OK).json({ attendees });
};

const getTalk = async (req, res) => {
  const talk = await Talks.findOne({ _id: req.params.talkId });
  if (!talk) {
    throw new NotFoundError(
      `Talk with id:${req.params.talkId} no longer exist`
    );
  }
  res.status(StatusCodes.CREATED).json({ talk });
};
// const updateTalk = async (req, res) => {
//   const { title, speaker, capacity } = req.body;
//   if (title === "" || speaker === "" || capacity === "") {
//     throw new BadRequestError(`Fill in all fields`);
//   }

//   const { createdAt } = await Talks.findById({ _id: req.params.talkId });
//   const talk = await Talks.findOneAndReplace(
//     { _id: req.params.talkId },
//     { title, speaker, capacity, updatedAt: Date.now(), createdAt },
//     { new: true, runValidators: true }
//   );
//   if (!talk) {
//     throw new NotFoundError(`No job with id ${req.params.talkId}`);
//   }
//   res.status(StatusCodes.OK).json({ talk });
// };

const deleteTalk = async (req, res) => {
  const talk = await Talks.findByIdAndRemove({
    _id: req.params.talkId,
  });
  if (!talk) {
    throw new NotFoundError(`No talk with id ${req.params.talkId}`);
  }
  res.status(StatusCodes.OK).json({
    msg: `Talk with ${req.params.talkId} was removed successfully`,
  });
};

const deleteAttendeeOfATalk = async (req, res) => {
  const attendee = await Attendees.findOneAndDelete({
    _id: req.params.attendeeId,
    _talkId: req.params.talkId,
  });
  if (!attendee) {
    throw new NotFoundError(`No attendee with id ${req.params.talkId}`);
  }
  res.status(StatusCodes.OK).json({
    msg: `Attendee with ${req.params.attendeeId} was removed from talk`,
  });
};

module.exports = {
  addTalk,
  getTalks,
  addAttendeeToTalk,
  getAttendeesOfATalk,
  getTalk,
  deleteTalk,
  deleteAttendeeOfATalk,
};
