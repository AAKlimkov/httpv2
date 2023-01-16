GET api/users is used to get all persons
Status code 200 and all users records
GET api/users/{userId}
Status code 200 and and record with id === userId if it exists
Status code 400 and corresponding message if userId is invalid (not uuid)
Status code 404 and corresponding message if record with id === userId doesn't exist
POST api/users is used to create record about new user and store it in database
Status code 201 and newly created record
Status code 400 and corresponding message if request body does not contain required fields
PUT api/users/{userId} is used to update existing user
Status code 200 and updated record
Status code 400 and corresponding message if userId is invalid (not uuid)
Status code 404 and corresponding message if record with id === userId doesn't exist
DELETE api/users/{userId} is used to delete existing user from database
Status code 204 if the record is found and deleted
Status code 400 and corresponding message if userId is invalid (not uuid)
Status code 404 and corresponding message if record with id === userId doesn't exist
Users are stored as objects that have following properties:
id — unique identifier (string, uuid) generated on server side
username — user's name (string, required)
age — user's age (number, required)
hobbies — user's hobbies (array of strings or empty array, required)
