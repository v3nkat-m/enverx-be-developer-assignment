[![N|Solid](https://iili.io/Hi9giog.png)](https://www.enverx.com/)

EnverX offers a simple and convenient platform to fund early-stage projects
and trade future carbon credits.

## _Assginment For Backend Developer Role_

### Pre-Requisites
1) Install NodeJS and npm in your machine
2) MongoDB should be installed and running properly

### Dependencies
Node,Express,Npm,Git,Mongodb,Mongoose,Nodemon

### Installation
1) Clone the repo
```
git clone git@github.com:v3nkat-m/enverx-be-developer-assignment.git
```
2) Install the dependencies
```
cd enverx-be-developer-assignment
npm install
```
3) Change the port as per your requirement
4) Change the mongoDB url to the database you have created
5) Start the server
```
npm start
```
The Server will start running on `http://localhost:<port>` and make sure the db is up and running before making the requests.



### Schema
Two Schema were made- PostModel and CategoryModel

#### PostModel Schema
##### Fields
1) title - String - Title of the blog
2) author - String - Author's name
3) content - String - Blog Content
4) category - String - A string from a set of predefined categories. This field is referenced to CategoryModel
5) date - Date - Date of the article creation

#### CategoryModel Schema
##### Fields
1) name - String - Category name
2) posts - Array of Object Ids referencing PostModel Schema - Array of blog posts belonging to a particular category( Have not implemented an endpoint to update this but it would enable faster retrieving of articles based on category rather than filtering out)
   
### API Endpoints
1) #### POST Endpoint
Endpoint: `POST /posts`

Request Body:
```
{
  "title": "A is the first alphabet",
  "author": "James Bond",
  "content": "A is the first alphabet",
  "category": "Family"
}
```
Response:
```
{
    "title": "A is the first alphabet",
    "author": "James Bond",
    "content": "A is the first alphabet",
    "category": "Family",
    "_id": "64ae92f11dd89894094df63a",
    "date": "2023-07-12T11:48:01.415Z",
    "__v": 0
}
```
2) #### Retrieve a post by ID

Endpoint : `GET /posts/:id`

Example: `GET /posts/64ae4a495acc25798aa85260`

Response:
```
{
    "_id": "64ae92f11dd89894094df63a",
    "title": "A is the first alphabet",
    "author": "James Bond",
    "content": "A is the first alphabet",
    "category": "Family",
    "date": "2023-07-12T11:48:01.415Z",
    "__v": 0
}
```
3) #### Update a post
   
Endpoint: `PUT /posts/:id`

Example: `PUT /posts/64ae4a495acc25798aa85260`

Request:
```
{
    "_id": "64ae92f11dd89894094df63a",
    "title": "A is the first alphabet",
    "author": "James Bond",
    "content": "Did you notice, I changed the content",
    "category": "Family",
    "date": "2023-07-12T11:48:01.415Z",
    "__v": 0
}
```
Response:
```
{
    "_id": "64ae92f11dd89894094df63a",
    "title": "A is the first alphabet",
    "author": "James Bond",
    "content": "Did you notice, I changed the content",
    "category": "Family",
    "date": "2023-07-12T11:48:01.415Z",
    "__v": 0
}
```
4) #### Delete a post
   
Endpoint: `DELETE /posts/:id`

Example: `DELETE /posts/64ae92f11dd89894094df63a`

Response:
```
{
    "message": "Post deleted successfully"
}
```
5) #### Get all posts with filters and sorting
   
Endpoint: `GET /posts`

Query Parameters:
`category`: Filter post by category

`sortBy`: Sort posts by date or title

`sortOrder`: Sort order : `asc` or `desc`

Example:

Retrieving Posts based on category and sorted by date(asc by default)

Endpoint: `http://localhost:3000/posts?category=Family&sortBy=date`

Response:
```
[
    {
        "_id": "64ae4a495acc25798aa85260",
        "title": "Blog Post",
        "author": "James Bond",
        "content": "This is my First post",
        "category": "Family",
        "date": "2023-07-12T06:38:01.628Z",
        "__v": 0
    },
    {
        "_id": "64ae4a505acc25798aa85263",
        "title": "Blog Post",
        "author": "James Bond",
        "content": "This is my Second post",
        "category": "Family",
        "date": "2023-07-12T06:38:08.125Z",
        "__v": 0
    },
    {
        "_id": "64ae840f99d6340fea2e80d3",
        "title": "My Third Blog Post",
        "author": "James Bond",
        "content": "This is my Third post",
        "category": "Family",
        "date": "2023-07-12T10:44:31.738Z",
        "__v": 0
    },
    {
        "_id": "64ae92f11dd89894094df63a",
        "title": "A is the first alphabet",
        "author": "James Bond",
        "content": "Did you notice, I changed the content",
        "category": "Family",
        "date": "2023-07-12T11:48:01.415Z",
        "__v": 0
    }
]
```

