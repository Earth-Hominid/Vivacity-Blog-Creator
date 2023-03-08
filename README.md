# AutoBlog | Full Stack MERN App

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

A free platform to create and host your own blog.

Click here for the [live demo](). (The application will take a few seconds to start from sleep.)

<img width="1153" alt="Screen Shot 2022-06-22 at 11 37 32 AM" src="https://user-images.githubusercontent.com/66766688/175056913-2f953c80-2842-4119-9f76-a8117e3eceae.png">

## Description

Blog Creator was written using the Model-View-Controller architecture and the RESTful API framework. The application allows a user to create an account with email. Once they are logged in, and authenticated, they can create and save blog entries.

<img width="1164" alt="Screen Shot 2022-06-21 at 12 36 08 PM" src="https://user-images.githubusercontent.com/66766688/175057201-b602da44-d2be-4113-bdfa-0410bf435fb3.png">

### Backend

The server is written with Express. User details and blog entries are saved in a MongoDB database. Mongoose is utilized as the ORM.

The backend was built using the ExpressJS framework along with the Model-View-Controller (MVC) architecture pattern. This architecture separates the data management (the "model"), user interface (the "view"), and control flow (the "controller").

MVC was chosen because it offers code which is easier to understand and maintain, along with the added benefit of ease of ability in testing and extending the functionality of the application, if needed. Furthermore, it organises the routes and handlers in a logical and maintainable format.

MongoDB (a NoSQL database) was chosen because it can handle large numbers of read and write operations in parallel, which makes it well-suited for use cases with high write loads such as a content management system.

Another benefit MongoDB provides over a SQL database, is it's design, which allows it to handle large amounts of unstructured data, making it more flexible and scalable.

## Backend Security

Authentication provided by confirming user is in the database, while authorization is confirmed using JSON Web tokens to protect backend routes.

User passwords are first hashed using bcryptjs and then saved in the database as a hashed password.

Authentication is implemented by using JSON Web Token authentication. JWT's are signed using a secret along with the HMAC algorithm. Blog entries are attached to their account specifically using JSON Web token and stored in MongoDB.

User passwords are encrypted and stored in MongoDB using the BcryptJS package. Bcrypt is password hashing algorithm which protects against Rainbow attacks by utilizing a salt and against brute force attacks.

<img width="1158" alt="Screen Shot 2022-06-21 at 12 34 02 PM" src="https://user-images.githubusercontent.com/66766688/174841691-7bd3f600-9932-4be8-b190-7bfa71e52858.png">

### Frontend

Redux and Redux toolkit are utilized for state-management. The majority of CSS was created using the TailwindCSS library along with Styled-Components. The website is suitable for both smartphones and large monitors. The UI was designed for mobile use first.

<img width="1161" alt="Screen Shot 2022-06-21 at 12 36 55 PM" src="https://user-images.githubusercontent.com/66766688/174841903-9ea49689-8b63-4df6-8c9c-21d32d4e329c.png">

## Lessons learned

#### Middleware

Using Express's built in middleware function 'urlencoded' allows incoming requests with urlencoded payloads to be parsed. The parsed data is populated on the request object (req.body) and it contains key-value pairs which can either be a string or an array when 'extended' is set to false.

```js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

#### Error Handling Middleware

I was able to overwrite the Express error handler with my own middleware function. When set to 'development' it will return the error message and the stack, when server is set to 'production', only the message is returned.

```js
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
};

module.exports = { errorHandler };
```

#### Async/Await with Mongoose Promise

When interacting with our database using Mongoose, we will be recieving back a 'Promise', thus we need to use 'async/await'.

The Express-Async-Handler package is quite useful as we can use async/await without the extra boilerplate of 'try/catch'. We simply bring in the package and wrap the function with the handler:

```js
const asyncHandler = require('express-async-handler');

const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get blogs' });
});
```

#### Authentication Route Protection Middleware

Utilizing JSON Webtokens, we can write a function that that protects our routes by checking that our headers have the authorization object and they start with 'Bearer' and the token.

```js
const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const verifyTheToken = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(verifyTheToken.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
```

### Redux & Redux Toolkit

Slice files contain logic, while the service files contain HTTP requests, sending data, and setting data in local storage. Axios is used for HTTP requests from the client-side (frontend).

In order to obtain the 'user' from local storage (if they have previously logged in) with the JSON Webtoken, we need to use JSON.parse as local storage only stores strings:

```js
const user = JSON.parse(localStorage.getItem('user'));
```

### Dependencies

#### Server-Side / Backend

- [Express](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Colors](https://www.npmjs.com/package/colors)
- [Nodemon](www.npmjs.com/package/nodemon)
- [Express-Async-Handler](https://www.npmjs.com/package/express-async-handler)
- [JSON Webtokens](https://jwt.io/)
- [BcryptJS](https://www.npmjs.com/package/bcrypt)

#### Client-Side / Frontend

- [Create React App](https://create-react-app.dev/)
- [Axios HTTP](https://axios-http.com/docs/intro)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Tailwind Styled Components](https://www.npmjs.com/package/tailwind-styled-components)
