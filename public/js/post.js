
$(document).ready(function () {
    $("new-post-form").on("submit", function (event) {
        event.preventDefault();
        console.log("You successfully post")
        const newPost = {
            firstName: $("#first_name").val(),
            lastName: $("#last_name").val(),
            email: $("#email").val(),
            school: $("#school").val(),
            mainLanguage: $("#main_language").val(),
            secondaryLanguage: $("#secondary_language").val(),
            linkedIn: $("#linkedIn").val(),
            gitHub: $("gitHub").val(),
            resume: $("resume").val(),
            description: $("description").val(),
        };
        // Alert if those conditions are not met
        if (
            !newPost.first_name ||
            !newPost.last_name ||
            !newPost.email||
            !newPost.school||
            !newPost.main_language ||
            !newPost.linkedIn ||
            !newPost.gitHub 
        ) {
            alert("Please complete all the required fields!");
        } else {
            $.ajax({
                url: "/api/students",
                method: "POST",
                data: newPost,
            }).then((response) => {
                console.log(response);
                window.location.href = "/students";
            });
        }
    });
});