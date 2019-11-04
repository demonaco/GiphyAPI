var characters = ["Aladdin", "Ariel", "Cinderella", "Sleeping Beauty", "Nemo", "Mickey Mouse", "Snow White", "Flounder", "Ursula", "Mulan"];
// displayArray();

$(document).ready(function () {
   function renderButtons() {
        $("#displayGif").empty();
        for (var i = 0; i < characters.length; i++) {
            var newGif = $("<button>");
            newGif.addClass("character")
            newGif.attr("data-name", characters[i]);
            newGif.text(characters[i]);
            $("#displayGif").append(newGif);

        }

    }
$("#add-gif").on("click", function(event){
event.preventDefault();
var userInput = $("#search-gifs").val().trim();
characters.push(userInput);
var gifQuery = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifQuery + "&api_key=zLtOADNeg8ECuUXQJAL5Uubqd8ZRCfs8&limit=10&offset=0&rating=G&lang=en";
console.log(gifQuery);
renderButtons();

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL);
console.log(response.data)
})
    //going through the array to grab the URL from the JSON object and displaying them on the page
    // for (var i = 0; i < response.data.length; i++) {
    //     console.log(response.data);
        // var imageUrl = response.data[i].images.fixed_height_small_still.url;
        // console.log(imageUrl)
        // var createImg = $("<img>");
        // createImg.attr("src", imageUrl);
        // $("#displayGif").append(createImg);
        //console.log(data[i].images.original.url);
        //console.log(response)
    
    //going through the array to grab the URL from the JSON object and displaying them on the page



renderButtons();
})

renderButtons();
})



// var queryURL = "https://api.giphy.com/v1/gifs/search?q=simba&api_key=zLtOADNeg8ECuUXQJAL5Uubqd8ZRCfs8&limit=10&offset=0&rating=G&lang=en"

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response.data)
//     //going through the array to grab the URL from the JSON object and displaying them on the page
//     for (var i = 0; i < response.data.length; i++) {
//         console.log(response.data);
//         var imageUrl = response.data[i].images.fixed_height_small_still.url;
//         console.log(imageUrl)