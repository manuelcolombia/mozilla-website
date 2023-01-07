const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox_logo.png") {
    myImage.setAttribute("src", "darthvader.png");
  } else {
    myImage.setAttribute("src", "firefox_logo.png");
  }
};
var button = document.getElementById("hidebutton");
var image = document.getElementById("firefox");

button.addEventListener("click", function() {
  image.style.display = "none";
});
var button = document.getElementById("showbutton");
var image = document.getElementById("firefox");

button.addEventListener("click", function() {
  image.style.display = "block";
});