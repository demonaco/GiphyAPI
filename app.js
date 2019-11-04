var characters = ["Aladdin", "Ariel", "Cinderella", "Sleeping Beauty", "Nemo", "Mickey Mouse", "Snow White", "Flounder", "Ursula", "Mulan"];
// displayArray();
// $(document).on("click", ".characters", call);

$(document).ready(function () {
    function displayGif() {
        var gifQuery = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifQuery + "&api_key=zLtOADNeg8ECuUXQJAL5Uubqd8ZRCfs8&limit=10&offset=0&rating=G&lang=en";
        console.log(gifQuery);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response.data);
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].url);
                var imageUrl = (response.data[i].images.original.url);
                console.log(imageUrl)
                var createImg = $("<img>");
                createImg.attr("data-name");
                createImg.attr("src", imageUrl);
                $("#displayGif").append(createImg);
                console.log(response.data[i].url);
                console.log(response);
                
//Replace the animation state on the gif
                $("img").on("click", function dataState() {
                    console.log("this has been clicked");
                
                    // var fixed = (response.data[i].images.fixed_height_still.url);
                    // var animated = (response.data[i].images.fixed_height.url);
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                
                });

                // $("#displayGif").append(response.data.images.fixed_height_small_still.url);
            }
        })
    } //adding our buttons from the search of user
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
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var userInput = $("#search-gifs").val().trim();
        characters.push(userInput);
        console.log(characters);
        renderButtons();
    })
    $(document).on("click", ".character", displayGif);
    // $(document).on("click", "img", dataState);
    renderButtons();
});
