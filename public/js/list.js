// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".saveButton").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newSave = $(this).data("newsave");

    var newSaveState = {
      savedState: newSave,
    };

    // Send the PUT request.
    $.ajax("/api/students/save/" + id, {
      type: "PUT",
      data: newSaveState,
    }).then(function () {
      location.reload();
    });
  });
});
