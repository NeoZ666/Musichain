//IMPORTS :
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const reteLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const dotenv = require("dotenv");

// MANUAL FILE IMPORTS :
const userRoutes = require("./routes/userRoutes");
const songRoutes = require("./routes/songRoutes");

// INSTANCE OF EXPRESS :
const app = express();
app.use(morgan("dev"));
dotenv.config({ path: "/env" });

// MIDDLEWARES //

// >> GLOCAL MIDDLEWARES :

// Security HTTP Header:
// app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Limit requests from same API
// const limiter = reteLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: "Too many requests from this IP Address, try again after 1 hour",
// });
// app.use("/api", limiter);

// Body Parser, reading data from req.body :
app.use(express.json());
app.use("/", express.static("uploads"));
// app.use(express.json({ limit: '10kb' }));

// Data Sanitization : "email : { $gt: ' ' } --> Gets accepted.
app.use(mongoSanitize());

// Data Sanitization against XSS : HTML code is not allowed to passed :
app.use(xss());

// Backend - FrontEnd connections :
app.use(cors());

// >> CUSTOM MIDDLEWARE :
// app.use((req, res, next) => {
//   console.log("Hello from Middleware 🫂");
//   console.log(req.headers);
//   next();
// });

// /test ROUTE :
// app.get("/test", (req, res) => {
//   return res.json("Test");
// });

// ROUTE HANDLERS ==> MOUNTING THE ROUTER :
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/users", songRoutes);

// ANY UNHANDLED ROUTE :
app.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
