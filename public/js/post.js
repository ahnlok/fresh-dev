console.log("Server's running")
$(document).ready(function () {
    console.log("inside document.ready")
    $("#new-post-form").on("submit", function (event) {
        event.preventDefault();
        console.log("You successfully post")
        const newPost =
        {
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
        console.log(newPost);
        // Alert if those conditions are not met
        // if (
        
        //     !newPost.firstName ||
        //     !newPost.lastName ||
        //     !newPost.email ||
        //     !newPost.school ||
        //     !newPost.mainLanguage ||
        //     !newPost.linkedIn ||
        //     !newPost.gitHub 
        // ) {
        //     console.log(!newPost.firstName);
        //     alert("Please complete all the required fields!");
        // } else {
            $.ajax({
                url: "/api/students",
                method: "POST",
                data: newPost,
            }).then((response) => {
                console.log(response);
                window.location.href = "/list";
            });
        // }
    });
});