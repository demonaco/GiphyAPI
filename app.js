var characters = ["Aladdin", "Ariel", "Cinderella", "Sleeping Beauty", "Nemo", "Mickey Mouse", "Snow White", "Flounder", "Ursula", "Mulan"];

var queryURL = api +  apiKey +  apiSearch;
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=zLtOADNeg8ECuUXQJAL5Uubqd8ZRCfs8";
var apiSearch = "&q=disney&limit=10&offset=0&rating=G&lang=en";
// var search = ""
// var url = "";
// var q = "";


$(document).ready(function(){
$("#add-gif").click(function clicked(){
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(resonse){
        console.log(response);
    
    for (var i = 0; i < data.length; i++)
   var imageUrl = (data.data[i].images.original.url);
  var createImg = $("<img>");
  createImg.attr("src", imageUrl);
  $("#displayGif").append(createImg);
console.log(data[i].images.original.url);
console.log(response)

function addButton(){
$("#add-gif").empty();
for (var i = 0; i < characters.length; i++)
var newButton = $("<button>");
newButton.addClass("Disney");
newButton.attr("character-name", characters[i]);
newButton.text(characters[i]);
$("#add-gif").append(newButton);
}
$("#add-gif").on("click", function(){
event.preventDefault();
var searchTerm = $("#search-gifs").val().trim();
searchTerm.push(characters);

addbutton();
})

$("img").on("click", function() {
    var state = $(this).attr(data-state);
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else { 
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");


    }

    }
    
});

});
addButton();
 
});
});




