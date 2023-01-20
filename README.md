Alpha Gaps is looking for someone to develop an app for talks at a conference.

Requirements:
● Build a REST API for the app
● Demonstrate the use of REST conventions
● Include endpoints to:
○ add a talk
○ add an attendee
○ add an attendee to a talk
○ list talks
○ list attendees
○ list attendees for a talk

Solution:

I would create a RESTful API using the following endpoints:

POST /talk – This endpoint allows the user to add a new talk.

POST /attendee – This endpoint allows the user to add a new attendee.

POST /attendee/{talkId} – This endpoint allows the user to add an attendee to a specific talk.

GET /talks – This endpoint allows the user to list all the talks.

GET /attendees – This endpoint allows the user to list all the attendees.

GET /attendees/{talkId} – This endpoint allows the user to list all the attendees for a specific talk.


SOLUTION 2

Alpha Gaps is looking for someone to develop an app for talks at a conference.

Requirements:
● Build a REST API for the app
● Demonstrate the use of REST conventions
● Include endpoints to:
○ add a talk
○ add an attendee
○ add an attendee to a talk
○ view all talks
○ view all attendees
○ view all attendees registered for a particular talk
○ view all talks attended by a particular attendee

Solution:
The development of the app would involve creating a REST API with the following endpoints: 

● Add Talk: This endpoint would allow a user to add a talk to the conference. It would take the title, description, and speaker as parameters.

● Add Attendee: This endpoint would allow a user to add an attendee to the conference. It would take the attendee's name, email address, and any other information as parameters.

● Add Attendee to Talk: This endpoint would allow a user to add an attendee to a particular talk. It would take the attendee's name, talk title, and any other information as parameters.

● View All Talks: This endpoint would allow a user to view all the talks that have been scheduled for the conference. It would return a list of all the talks with their details.

● View All Attendees: This endpoint would allow a user to view all the attendees that have registered for the conference. It would return a list of all the attendees with their details.

