$(document).ready(function () {
  $("#new-post-form").on("submit", function (event) {
    event.preventDefault();
    // console.log("You successfully post")
    const newPost = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#email").val(),
      school: $("#school").val(),
      mainLanguage: $("#mainLanguage").val(),
      subLanguage: $("#subLanguage").val(),
      linkedIn: $("#linkedIn").val(),
      gitHub: $("#gitHub").val(),
      resume: $("#resume").val(),
      description: $("#description").val(),
    };
    // console.log(newPost);

    $.ajax({
      url: "/api/students",
      method: "POST",
      data: newPost,
    }).then((response) => {
      // console.log(response);
      window.location.href = "/students";
    });
  });
});
