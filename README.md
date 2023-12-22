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
Body: 
{  
    "email": "example.example@example.org",  
    "password": "set password"  
}  
Output(The email adress): {email: example.example@example.org}

## Functions
1. Now you can add a new Task, for this, you also have to use a POST request, it should contain a json object with a property called author and one called title  
Example URL: localhost:3000/tasks
Body: 
{  
    "title": "say hello",  
    "author": "john smith"  
}  
Output(The created task): 
{   
  "id": "c33d25f6-b548-4c65-83b8-d28714b7e38a",  
  "title": "say hello",  
  "author": "john smith",  
  "created_at": "2023-12-22T15:09:10.282Z",  
  "completet_at": null  
}  

2. To get all tasks, just use a get request at the endpoint /tasks, for a specific task, just enter the id after /tasks

Example URL 1: localhost:3000/tasks  
Output 1(All tasks):     
{  
    "id": "c33d25f6-b548-4c65-83b8-d28714b7e38a",  
    "title": "say hello",  
    "author": "john smith",  
    "created_at": "2023-12-22T15:09:10.282Z",  
    "completet_at": null  
  },  
  {  
    "id": "fa5ff785-9380-4b08-af22-9ab072e7f967",  
    "title": "say hello",  
    "author": "john smith",  
    "created_at": "2023-12-22T15:10:21.472Z",  
    "completet_at": null  
  },  

Example URL 2: localhost:3000/tasks/516842148-52544-974542-843548    
Output 2(One task):    {
    "id": "c33d25f6-b548-4c65-83b8-d28714b7e38a",  
    "title": "say hello",  
    "author": "john smith",  
    "created_at": "2023-12-22T15:09:10.282Z",  
    "completet_at": null  
  },   

3. To change informations of a task, use a PATCH request and its body should contain a json object with at least one of those properties: title, author, completed_at

Example URL: localhost:3000/tasks/516842148-52544-974542-843548 
Body: 
{  
    "title": "say goodby"  
}
Output(The changed task):  
{  
  "id": "c33d25f6-b548-4c65-83b8-d28714b7e38a",  
  "title": "say goodby",  
  "author": "john smith",  
  "created_at": "2023-12-22T15:09:10.282Z",  
  "completet_at": ""  
}  


4. To delete a task, use a DELETE request with an id  

Example URL = Example URL 2: localhost:3000/tasks/516842148-52544-974542-843548 
Output(The deleted task): 
{  
  "id": "c33d25f6-b548-4c65-83b8-d28714b7e38a",  
  "title": "say hello",  
  "author": "john smith",  
  "created_at": "2023-12-22T15:09:10.282Z",  
  "completet_at": null  
}  

## Status
1. To check your status, use a GET request at the adress: localhost:3000/verify  
Output(The email adress): {email: example.example@example.org}  

2. To log out, use a DELETE request at the adress: localhost:3000/logout
Output(The email adress): {logout: Logout successful}
