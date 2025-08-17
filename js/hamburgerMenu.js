function myFunction() {
    var x = document.getElementById("hamburgerLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }