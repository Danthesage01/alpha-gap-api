const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong. Please try again later",
  };


    if (err.name === "ValidationError") {
      customError.msg = Object.values(err.errors)
        .map((item) => item.message)
        .join(",");
      customError.statusCode = 400;
    }

  if (err.name === "CastError") {
    customError.msg = `No talk with id found`;
    customError.statusCode = 404;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `${Object.keys(
      err.keyValue
    )} already exist. Please use another ${Object.keys(err.keyValue)}`;
    customError.statusCode = 400;
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
