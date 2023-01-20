require("dotenv").config();
require("express-async-errors");

// EXTRA SECURITY PACKAGES
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const talkRouter = require("./routes/talks");
const attendeeRouter = require("./routes/attendees");

// Other Middleware
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, // Limit each IP to 100 requests per windows
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// MIDDLEWARE FOR ROUTES
app.use("/talks", talkRouter);
app.use("/attendees", attendeeRouter);

// MIDDLEWARE FOR ERROR
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// PORT
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server started successfully on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
