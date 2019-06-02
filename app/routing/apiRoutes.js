var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });


    //used to handle incoming survey results, and handle compatibility logic.
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newFriendTotalScore = 0;
        var minDiff = 40;
        var bestFriend;
        for (x = 0; x < newFriend.score.length; x++) {
            newFriendTotalScore += parseInt(newFriend.score[x]);
        }
        console.log(newFriendTotalScore);

        for (y = 0; y < friends.length; y++) {
            var currentFriendScore = 0;
            var difference;
            for (z = 0; z < friends[y].score.length; z++) {
                var currentFriend = friends[y];
                currentFriendScore += parseInt(currentFriend.score[z]);
                console.log(currentFriend);
                console.log(currentFriendScore);
                difference = Math.abs(newFriendTotalScore - currentFriendScore);
            }
            if (difference < minDiff) {
                bestFriend = friends[y];
                minDiff=difference;
                console.log(bestFriend);
                console.log(minDiff);
            }
        }

        friends.push(newFriend);
        res.json(bestFriend);
    });
}