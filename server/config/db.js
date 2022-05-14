const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB connected: ${connect.connection.host}`.brightGreen.underline
    );
  } catch (error) {
    // If error, exit the process with failure, represented by the '1'.
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
