const imageArray = [
     "BBQ",
     "BordStele",
     "GietIjzer",
     "KampVuur",
     "KerstDiner_Group",
     "Picture1",
     "Picture2",
     "SSN-SSW-group",
     "StrohComel"
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
