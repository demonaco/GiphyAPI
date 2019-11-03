var queryURL = api + apiKey + apiSearch;
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=zLtOADNeg8ECuUXQJAL5Uubqd8ZRCfs8";
var apiSearch = "&q=disney&limit=10&offset=0&rating=G&lang=en";
// var search = ""
// var url = "";
var q = "";


$(document).ready(function(){
$(".button").click(function clicked(){
    event.preventDefault();
    alert("hihihi");
 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(resonse){
        console.log(response);
    
    for (var i = 0; i < data.length; i++)
   var imageUrl = (data.data[1].images.original.url);
  var createImg = $("<img>");
  createImg.attr("src", imageUrl);
  $(document).prepend(createImg);


console.log(gifs[i].images.original.url);
console.log(response)
});   
});
});




