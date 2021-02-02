
  $("#search-btn").on("click", function() {
    var searchedLanguage = $("#language-search").val().trim();
    // RegEx
    searchedLanguage = searchedLanguage.replace(/\s+/g, "").toLowerCase();
   
    window.location.href = "/students/search/" + searchedLanguage;

    });