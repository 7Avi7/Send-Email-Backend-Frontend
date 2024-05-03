const express = require("express");
const bodyParser = require("body-parser");
const publicRouter = require("./routers/publicRouter");
const emailRouter = require("./routers/emailRouter");
const authorRouter = require("./routers/authorRouter");

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Use routers
app.use("/", publicRouter);
app.use("/", emailRouter);

// Use the authorRouter for requests starting with /authors
app.use("/avi", authorRouter);

module.exports = app;
