const imageArray = [
     "BussenInBus",
     "Crazy88",
     "Intro",
     "IntroPalen",
     "Kerstdiner",
     "yoga",
]

let i = 0;

function showSlides() {
     if (i >= imageArray.length) {
          i = 0;
     }
     document.getElementById("slideShow").style.backgroundImage = "url('../images/header/"+ imageArray[i] +".jpg')";
     i++;
     setTimeout(showSlides, 6000)
}

showSlides();
