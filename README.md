you can run this file using  <mark> nodemon index.js</mark>

<strong>mongodb connect using</strong> 
<mark>mongodb://127.0.0.1:27017/blog-app</mark>

### Authentication Endpoints

| Method | Route        | Description                  |
|--------|--------------|------------------------------|
| POST   | /register     | Register a new user          |
| POST   | /login        | Log in as an existing user   |
| GET    | /logout       | Log out the current user     |

##
### Blog Endpoints

| Method | Route           | Description                    |
|--------|-----------------|--------------------------------|
| GET    | /blog        | Fetch all blog                 |
| POST   | /blog        | Create a new blog              |
| PATCH  | /blog/:id    | Update an existing blog        |
| DELETE | /blog/:id    | Delete a blog                  |
