## Develop an app for talks at a conference.

## Requirements:
● Build a REST API for the app

● Demonstrate the use of REST conventions

## Endpoints:
  ```mermaid
 graph TD;
   A[Compulsory Endpoints]-->B[Add a talk];
   A[Compulsory Endpoints]-->C[Add an attendee];
   A[Compulsory Endpoints]-->D[Add an attendee to a talk];
```

## Solution:

I created a RESTful API with the following endpoints:

POST /talks – This endpoint allows you to add a new talk.

POST /attendee – This endpoint allows you to add a new attendee.

POST /talks/:talkId/attendees – This endpoint allows you to add an attendee to a specific talk.

GET /talks – This endpoint allows you to read all the talks.

GET /attendees – This endpoint allows you to read all the attendees.

GET /talks/:talkId/attendees – This endpoint allows you to read all the attendees for a specific talk.

GET /talks/:talkId – This endpoint allows you to read a specific talk.

DELETE /talks/:talkId – This endpoint allows you to delete a specific talk.

DELETE /talks/:talkId/attendees/:attendeeId – This endpoint allows you to delete an attendee for a specific talk.

DELETE /attendees/:attendeeId – This endpoint allows you to delete any registered attendee.



## LINKS

### Root URL ---  https://alpha-gaps.onrender.com/

### Docs URL --- https://alpha-gaps.onrender.com/api-docs/

### Bare URL --- https://alpha-gaps.onrender.com/api-docs/api/v1

### Talks Endpoint --- https://alpha-gaps.onrender.com/api-docs/api/v1/talks

### Attendees URL --- https://alpha-gaps.onrender.com/api-docs/api/v1/attendees

