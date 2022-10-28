
function generateText(length) {
    /*  function to generate some text for the articles section
        of the test geektechstuff website */
    var generatedText = "";
    var alphabet ="abcdefghijklmnopqrstuwxyz";
    for( var i=0; i < length; i++){
        generatedText += alphabet.charAt(Math.floor(Math.random()*26))
    }
    return generatedText;
}

function generateArticle() {
    /* generates a random article of text from generateText */
    var generatedArticle = "";
    var amountToGenerate = Math.random() * (300 - 25) + 250;
    generatedArticle = generateText(amountToGenerate);
    return generatedArticle;
}

/* updates article 1, 2 and 3 to show some text */
var pArticle_1 = document.getElementById("p_article_1");
var pArticle_2 = document.getElementById("p_article_2");
var pArticle_3 = document.getElementById("p_article_3");

pArticle_1.innerHTML=generateArticle();
pArticle_2.innerHTML=generateArticle();
pArticle_3.innerHTML=generateArticle();
Location:

var mapLocation = document.getElementById("main_feature")
navigator.geolocation.getCurrentPosition(success,fail);
mapLocation.textContent = "Locating..."

// outputs longitude and latitude if location is a success
function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    longLatMsg = "Longitude: "+longitude+" Latitude: "+latitude;
    mapLocation.textContent = longLatMsg;
}

// outputs error message as page content if location fails
function fail(msg) {
    mapLocation.textContent = msg
}