const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox_logo.png") {
    myImage.setAttribute("src", "darthvader.png");
  } else {
    myImage.setAttribute("src", "firefox_logo.png");
  }
};
