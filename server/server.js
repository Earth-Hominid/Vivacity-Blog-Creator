const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDatabase = require('./config/db');
const port = process.env.PORT || 8001;

connectDatabase();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
