const express = require("express");
const router = express.Router();
const {
  addTalk,
  getTalks,
  addAttendeeToTalk,
  getAttendeesOfATalk,
  deleteTalk,
  getTalk,
  deleteAttendeeOfATalk,
} = require("../controllers/talks");

router.route("/").post(addTalk).get(getTalks);
router.route("/:talkId").delete(deleteTalk).get(getTalk);
router
  .route("/:talkId/attendees")
  .post(addAttendeeToTalk)
  .get(getAttendeesOfATalk);
router.route("/:talkId/attendees/:attendeeId").delete(deleteAttendeeOfATalk);

module.exports = router;
