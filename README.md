# Blog Creator | Full Stack MERN App

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

A blog creation app built with the MERN stack.

## Description

Blog Creator was written using the Model-View-Controller architecture and the RESTful API framework. The application allows a user to create an account with email. Once they are logged in, and authenticated, they can create and save blog entries.

## Backend

The server is written with Express. User details and blog entries are saved in a MongoDB database. Mongoose is utilized as the ORM.

### Security Details

Authentication is implemented by using JSON Web Token authentication. JWT's are signed using a secret along with the HMAC algorithm. Blog entries are attached to their account specifically using JSON Web token and stored in MongoDB.

User passwords are encrypted and stored in MongoDB using the BcryptJS package. Bcrypt is password hashing algorithm which protects against Rainbow attacks by utilizing a salt and against brute force attacks.

### Frontend

Redux and Redux toolkit are utilized for state-management. The majority of CSS was created using the TailwindCSS library along with Styled-Components. The website is suitable for both smartphones and large monitors. The UI was designed for mobile use first.

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
