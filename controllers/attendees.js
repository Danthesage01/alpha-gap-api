const Attendees = require("../models/Attendees");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getAttendees = async (req, res) => {
 const attendees= await Attendees.find({}).sort("-createdAt")

  // if (attendees.length <= 0) {
  //   throw new NotFoundError(`No attendees added yet.`);
  // }
  res
    .status(StatusCodes.OK)
    .json({
      attendees,
      msg: `request successful`,
      nbhits: attendees.length,
      status: StatusCodes.OK,
      statusText: `OK`,
    });
};

const addAttendee = async (req, res) => {
  const attendee = await Attendees.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({
      attendee,
      msg: `attendee created successfully`,
      status: StatusCodes.CREATED,
      statusText: `CREATED`,
    });
};

const deleteAttendee = async (req, res) => {
  const attendee = await Attendees.findByIdAndRemove({
    _id: req.params.attendeeId,
  });
  if (!attendee) {
    throw new NotFoundError(`No attendee with id.`);
  }
  res.status(StatusCodes.OK).json({
    msg: `Attendee with ${req.params.attendeeId} removed successfully`,
    status: StatusCodes.NO_CONTENT,
    statusText: `NO_CONTENT`,
  });
};



module.exports = {
 addAttendee,
 getAttendees,
 deleteAttendee
}