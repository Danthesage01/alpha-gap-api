const Attendees = require("../models/Attendees");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getAttendees = async (req, res) => {
 const attendees= await Attendees.find({})
  res.status(StatusCodes.OK).json({ attendees});
};

const addAttendee = async (req, res) => {
  const attendee = await Attendees.create(req.body);
  res.status(StatusCodes.CREATED).json({ attendee });
};

const deleteAttendee = async (req, res) => {
  const attendee = await Attendees.findByIdAndRemove({
    _id: req.params.attendeeId,
  });
  if (!attendee) {
    throw new NotFoundError(`No attendee with id ${req.params.attendeeId}`);
  }
  res.status(StatusCodes.OK).json({
    msg: `Attendee with ${req.params.attendeeId} was removed successfully`,
  });
};



module.exports = {
 addAttendee,
 getAttendees,
 deleteAttendee
}