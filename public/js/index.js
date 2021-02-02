$("#search-btn").on("click", function () {
  var searchedLanguage = $("#language-search").val().trim();
  // RegEx
  searchedLanguage = searchedLanguage.replace(/\s+/g, "").toLowerCase();

  window.location.href = "/students/search/" + searchedLanguage;
});

/**
 * getPexelsImage
 * Call to Pexels API
 */
function getPexelsImage(searchTerm, numImages) {
  // Validate 0 <= numImages <= 80
  if (numImages > 80) {
    numImages = 80;
    throw numImagesTooLargeException;
  } else if (numImages < 0) {
    numImages = 0;
    throw numImagesTooSmallException;
  }
  // Build queryURL from base API URL and parameters
  var queryURL =
    "https://api.pexels.com/v1/search?query=" +
    searchTerm +
    "&per_page=" +
    numImages;
  // Actual API call
  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001f89041f69d0a47538b315fc967356983",
    },
  }).then(function (response) {
    // Choose an image at random from 0 to numImages parameter
    randomNumber = Math.floor(Math.random() * response.photos.length);

    // May want to parameterize image orientation selection, currently landscape.
    $("body").css(
      "background-image",
      "url(" + response.photos[randomNumber].src.landscape + ")"
    );
    $("body").css("background-size", "cover");
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-position", "center");
    $("body").css("background-attachment", "fixed");
    $("body").css("backdrop-filter", "blur(4px)");
    $("body").css("z-index", "0");
  });
}

/**
 * showCredits
 * Desc: A function appending links to creator pages
 */
function showCredits() {
  var creditsDiv = $("<div>").addClass("fixed-bottom creditDiv");

  var creditPexelsEl = $("<p>")
    .html(
      'Photos provided by <a class="creditLink" href="https://www.pexels.com/" target="_blank">Pexels</a>'
    )
    .addClass("m-0");
  $(creditsDiv).append(creditPexelsEl);
  $(creditsDiv).append(creditFellowsEl);

  $("#language-search").append(creditsDiv);
  console.log("Legal requirements met");
}

function init() {
  getPexelsImage("social network", "10");
  showCredits();
}

$(document).ready(init());
  
