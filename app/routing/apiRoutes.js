// Required:
const express = require("express");
const app = express();
const friends = require("../data/friends")

app.post("/api/friends", function (req, res) {
    res.json(true);
    var numbsArr = [];
    var newFriendName = req.body.name;
    var newFriendTotal = 0;

    for (let i = 0; i < req.body.scores.length; i++) {
        var numbs = parseInt(req.body.scores[i]);
        numbsArr.push(numbs);
    }

    var newFriend = {
        name: newFriendName,
        scores: numbsArr
    }

    friends.push(newFriend);

    for (let i = 0; i < numbsArr.length; i++) {
        newFriendTotal += numbsArr[i];
        console.log(newFriendTotal);
    }

    let allScoreSums = [];

    for (let i = 0; i < friends.length; i++) {
        var scoreTotal = 0;
        for (let j = 0; j < friends[i].scores.length; j++) {
            scoreTotal += friends[i].scores[j];
        }
        allScoreSums.push(scoreTotal);
        scoreTotal = 0;
    }

    for (let i = 0; i < allScoreSums.length; i++) {
        // Find the difference between newFriendTotal and allScoreSums[i]
        // Google how best to find difference, not necessarily subtraction
        // The smallest difference is the winner!        
    }

});

app.get("/api/friends", (req, res) => {
    return res.json(friends)
});

module.exports = app;