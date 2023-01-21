<h1>RESTful API Documentation</h1>

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|http://localhost:5000/post/ | Retrieve all posts |
|`GET`|http://localhost:5000/post/{postId} | Retrieve a single post by its ID |
|`POST`|http://localhost:5000/post | Create a new post |
|`PUT`|http://localhost:5000/post/{postId} | Update a post by its ID |
|`DELETE`|http://localhost:5000/post/{postId} | Delete a post by its ID |

Gophish returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

### Package Dependencies
This API is built using the following packages:
- Express
- Body-parser 
- Nodemon
- Mongoose

### Getting Started
To run the API locally, you will need to have Node.js and npm installed on your machine.
## Clone the repository: 
- git clone [https://github.com/wirapratamaz/PostCRUD](https://github.com/wirapratamaz/PostCRUD.git)
## Install the dependencies: 
- npm install 
## Start the server: 
- npm run start
## The API will be running on http://localhost:5000
