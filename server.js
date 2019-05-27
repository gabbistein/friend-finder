// Required:
const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Pulling my routes in:
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

// Middleware for parsing:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// App.use part:
app.use(express.static("app/public"));
app.use("/", htmlRoutes);
app.use(apiRoutes);

  
// Telling my app to listen at this PORT:
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});
