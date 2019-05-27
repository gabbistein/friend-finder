// Required:
const express = require("express");
const app = express();
const friends = require("../data/friends")

app.post("/api/friends", function (req, res) {
    res.json(true);
    friends.push(req.body);
});

app.get("/api/friends", (req, res) => {
    return res.json(friends)
});
    
module.exports = app;