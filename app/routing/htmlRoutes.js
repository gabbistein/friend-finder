// Required:
const express = require("express");
const router = express.Router();
const path = require("path");

var options = {
    root: path.join(__dirname, "../public")
}

router.get("/", function (req, res) {
    res.sendFile("home.html", options, function (err) {
        if (err) {
            throw err;
        }
    })
})

// router.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"))
// });

// router.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"))
// });

module.exports = router;