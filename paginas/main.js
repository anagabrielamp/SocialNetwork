$(document).ready(function() {
    $("#postButton").click(function() {
        $("postsContainer").append(
            '<div class="card" id="postsContainer">' +
          '<div class="card-body">' +
          '<h4 class="card-title">' +
            $("#postTitle").val() +
          '</h4>' +
          '<p class="card-text">' +
            $("#postMessage").val() +
          '</p>' +
        '</div>'  +
        '</div>'
        );
    });

});