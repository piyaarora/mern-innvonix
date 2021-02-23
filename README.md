# starting frontend
cd frontend -> npm start

## starting backend 
cd backend -> npm run server

### Backend API hitpoints

# FOR LOGIN/REGISTERING USERS

for register:
*request type: POST
** http://localhost:5003/api/users/register

for login:
*request type: POST
** http://localhost:5003/api/auth/login

fot getting user via token:
*request type:GET
** http://localhost:5003/api/auth/user
*** In header
	key:x-auth-token,
	value:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAxZWIyOTNlN2NkM2E1MjUyMzJlMGRkIn0sImlhdCI6MTYxMjYzOTQwNSwiZXhwIjoxNjE2MjM5NDA1fQ.VWKc_y_-VWNVTdDkGpHMZ-bnc96_r62CFwSYgNWtodQ
 
for getting all users:
*request type:GET
** http://localhost:5003/api/auth/users


 # FOR EVENTS

for getting all events
*request type: GET
** http://localhost:5003/api/events/

for adding events
*request type: POST
** http://localhost:5003/api/events/addevent
{
    "title":"event3",
    "description":"testing event3",
    "category":"publish"
}

deleting events
*request type:DELETE
** http://localhost:5003/api/events/6033cf7aaa0d1e09bced1478

