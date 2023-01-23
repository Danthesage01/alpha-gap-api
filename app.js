require("dotenv").config();
require("express-async-errors");

// EXTRA SECURITY PACKAGES
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");


// SWAGGER
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerDocument = YAML.load("./swagger.yaml")

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
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


app.get("/", (req, res) => {
  res.send("<h1>Alpha Gap Talks API</h1><a href='/api-docs'>Check Documentation</a>");
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/api/v1", (req, res)=>{
res.send(
  "<p>Please use the docs to navigate this API.</p><span>Go to <a href='/api-docs'>Docs</a></span>"
);
})

// MIDDLEWARE FOR ROUTES
app.use("/api/v1/talks", talkRouter);
app.use("/api/v1/attendees", attendeeRouter);

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
