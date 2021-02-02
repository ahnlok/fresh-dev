
  $("#search-btn").on("click", function() {
    var searchedLanguage = $("#language-search").val().trim();
    // RegEx
    searchedLanguage = searchedLanguage.replace(/\s+/g, "").toLowerCase();
    $.ajax("/students/" + searchedLanguage, {
      type: "GET",
    }).then(
      function(data) {
        $("#search-section").empty();
        if (!data) {
          $("#search-section").append("<h2> Search Result Cannot Be Found! Search Again.</h2>");
        } else {
          $("#search-section").append(data.firstName);
          $("#search-section").append(data.lastName);
          $("#search-section").append(data.mainLanguage);
          $("#search-section").append(data.subLanguage);
          $("#search-section").append(data.school);
          $("#search-section").append(data.email);
          $("#search-section").append(data.gitHub);
          $("#search-section").append(data.resume);
          $("#search-section").append(data.description);
         
        }
      });
    });