$("#survey-button").click(function () {
    getFriend();
});

function getFriend() {
    $.get("./friends.js", function (response) {
        console.log("Success!");
        $("#new-friend").html(response);
    });
}

