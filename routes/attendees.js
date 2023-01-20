const express = require("express");
const router = express.Router();

const {
  addAttendee,
  getAttendees,
  deleteAttendee,
} = require("../controllers/attendees");


router.route("/").post(addAttendee).get(getAttendees)
router.route("/:attendeeId").delete(deleteAttendee)

module.exports = router