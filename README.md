# Blog Creator | Full Stack MERN App

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

A blog creation app built with the MERN stack.

Click here for the [live demo](https://blog-creator-mern-app.herokuapp.com/). (The application will take a few seconds to start from sleep, as it is on the heroku free plan.)

<img width="1153" alt="Screen Shot 2022-06-22 at 11 37 32 AM" src="https://user-images.githubusercontent.com/66766688/175056913-2f953c80-2842-4119-9f76-a8117e3eceae.png">

## Description

Blog Creator was written using the Model-View-Controller architecture and the RESTful API framework. The application allows a user to create an account with email. Once they are logged in, and authenticated, they can create and save blog entries.

<img width="1164" alt="Screen Shot 2022-06-21 at 12 36 08 PM" src="https://user-images.githubusercontent.com/66766688/175057201-b602da44-d2be-4113-bdfa-0410bf435fb3.png">

## Backend

The server is written with Express. User details and blog entries are saved in a MongoDB database. Mongoose is utilized as the ORM.

### Security Details

Authentication is implemented by using JSON Web Token authentication. JWT's are signed using a secret along with the HMAC algorithm. Blog entries are attached to their account specifically using JSON Web token and stored in MongoDB.

User passwords are encrypted and stored in MongoDB using the BcryptJS package. Bcrypt is password hashing algorithm which protects against Rainbow attacks by utilizing a salt and against brute force attacks.

<img width="1158" alt="Screen Shot 2022-06-21 at 12 34 02 PM" src="https://user-images.githubusercontent.com/66766688/174841691-7bd3f600-9932-4be8-b190-7bfa71e52858.png">

### Frontend

Redux and Redux toolkit are utilized for state-management. The majority of CSS was created using the TailwindCSS library along with Styled-Components. The website is suitable for both smartphones and large monitors. The UI was designed for mobile use first.

<img width="1161" alt="Screen Shot 2022-06-21 at 12 36 55 PM" src="https://user-images.githubusercontent.com/66766688/174841903-9ea49689-8b63-4df6-8c9c-21d32d4e329c.png">

### Dependencies

- [Express.js](https://expressjs.com/)
- [Express-Async-Handler](https://www.npmjs.com/package/express-async-handler/v/1.1.4)
- [JSON WEB TOKEN](https://jwt.io/)
- [BcryptJS is used to encrypt passwords.](https://openbase.com/js/bcryptjs/documentation)
- [Mongoose](https://mongoosejs.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [Tailwind Styled Components](https://www.npmjs.com/package/tailwind-styled-components)
- [Async](https://caolan.github.io/async/v3/)
- [Colors, used in console to show MongoDB connection](https://www.npmjs.com/package/colors)
- [dotenv](https://www.npmjs.com/package/dotenv)
