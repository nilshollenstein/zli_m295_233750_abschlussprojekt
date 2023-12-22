# M295 Leistungsbeurteilung B

Name: task order programm
Author: Nils Hollenstein

## Setup:
1. Download the dictionary
2. Make sure that docker is running
3. Open the folder in VS Code
4. Reopen the folder in a Node.js Javascript container
5. Run npm install
6. Run npm run start
7. Open a Client like Hoppscoth or Postman

## Start:
1. Open the site localhost:3000/swagger-ui to get access to the API-spezification
2. Now you can use the task tool
3. To log in, you have to use a POST request  The Body should contain an email adress and a password. The password is set in the authentication.js file, they have to be sent as JSON
### Please use the API-Documentation to get the adress for the different functions
## Functions
1. Now you can add a new Task, for this, you also have to use a POST request, it should contain a json object with a property called author and one called title  
2. To get all tasks, just use a get request at the endpoint /tasks, for a specific task, just enter the id after /tasks, example: /tasks/397594875
3. To change informations of a task, use a PATCH request and its body should contain a json object with at least one of those properties: title, author, completed_at
4. To delete a task, use a DELETE request with an id

## Status
1. To check your status, use a GET request at the adress: localhost:3000/verify
2. To log out, use a DELETE request at the adress: localhost:3000/logout