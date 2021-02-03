// Edit button

$(function () {
  $("#edit-btn").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    window.location.href = "/students/" + id + "/edit";
  });
});

//Post function
console.log("Server's running");
$(document).ready(function () {
  $("#edit-student-form").on("submit", function (event) {
    event.preventDefault();
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

    const id = $("#student-id").val();

    $.ajax({
      url: `/api/students/${id}`,
      method: "PUT",
      data: newPost,
    }).then((response) => {
      window.location.href = "/students/saved";
    });
  });
});

// Delete button
$("#delete-btn").on("click", function (event) {
  event.preventDefault();

  var id = $(this).attr("data-id");
  $.ajax({
    url: `/api/students/delete/${id}`,
    method: "DELETE",
  }).then((response) => {
    location.reload();
  });
});
