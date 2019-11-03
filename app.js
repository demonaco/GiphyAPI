var characters = ["Aladdin", "Ariel", "Cinderella", "Sleeping Beauty", "Nemo", "Mickey Mouse", "Snow White", "Flounder", "Ursula", "Mulan"];

// var queryURL = api +  apiKey + searchCharacter + apiSearch;
// var api = "https://api.giphy.com/v1/gifs/search?";
// var apiKey = "api_key=zLtOADNeg8ECuUXQJAL5Uubqd8ZRCfs8&q=";
// var searchCharacter = $("#search-gifs").val().trim().toString();
// var apiSearch = "&limit=10&offset=0&rating=G&lang=en";
// var search = ""
// var url = "";
// var q = "";

$(document).ready(function () {
    $("#add-gif").click(function clicked() {
        // event.preventDefault();
        var gifQuery = $("#search-gifs").val()
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifQuery + "&api_key=zLtOADNeg8ECuUXQJAL5Uubqd8ZRCfs8&limit=10&offset=0&rating=G&lang=en"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            //going through the array to grab the URL from the JSON object and displaying them on the page
            for (var i = 0; i < response.data.length; i++) {
                //console.log(response.data);

                var imageUrl = response.data[i].images.fixed_height_small_still.url;
                console.log(imageUrl)
                var createImg = $("<img>");
                createImg.attr("src", imageUrl);
                $("#displayGif").append(createImg);
                //console.log(data[i].images.original.url);
                //console.log(response)
            }
           addButton(gifQuery)
        })
        //adds buttons to the page
        function addButton(newTerm) {
            console.log(newTerm)
            characters.push(newTerm);
            $("#add-gif").empty();
            console.log("below are charactors")
            console.log(characters)
            for (var i = 0; i < characters.length; i++)
            
                var newButton = $("<button>");
            newButton.addClass("Disney");
            newButton.attr("character-name", characters[i]);
            newButton.text(characters[i]);
            $("#add-gif").append(newButton);
        }

        $("#add-gif").on("click", function () {
            event.preventDefault();
            var searchTerm = $("#search-gifs").val().trim();
            characters.push(searchTerm);

            addButton();
        });

        

        $("img").on("click", function () {
            alert("ypour in an onclick")
            var state = $(this).attr(data - state);
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");

            }
        });

    });
});






