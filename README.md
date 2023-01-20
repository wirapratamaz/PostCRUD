**RESTful API Documentation**

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:5000/post/ | Retrieve all posts |
|`GET`|http://localhost:5000/post/{postId} | Retrieve a single post by its ID |
|`POST`|http://localhost:5000/post | Create a new post |
|`PUT`|http://localhost:5000/post/{postId} | Update a post by its ID |
|`DELETE`|http://localhost:5000/post/{postId} | Delete a post by its ID |

Package Dependencies
This API is built using the following packages:
<br>
Express
<br>
Body-parser 
<br>
Nodemon
<br>
Mongoose
<br>

Getting Started
<br>
To run the API locally, you will need to have Node.js and npm installed on your machine.
<br>
Clone the repository: git clone https://github.com/wirapratamaz/PostCRUD
<br>
Install the dependencies: npm install 
<br>
Start the server: npm run start
<br>
The API will be running on http://localhost:5000
