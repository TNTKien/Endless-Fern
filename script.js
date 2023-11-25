var maxHeightScrolled = 0;
window.onscroll = function() {
    var heightScrolled = window.scrollY;

    var fernHeight = heightScrolled*0.05645 + 165;

    var heightScrolledElement = document.getElementById("headerText");
    heightScrolledElement.innerHTML = "Your Fern now is " + fernHeight.toFixed() + "cm";
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        var imageContainer = document.getElementById("image-container");
        imageContainer.innerHTML += `
            <img src="imgs/image4.jpg">
            <img src="imgs/image5.jpg">
            <img src="imgs/image6.jpg">
            <img src="imgs/image7.jpg">
            <img src="imgs/image8.jpg">
            <img src="imgs/image9.jpg">
        `;
    }
};

var backToTopButton = document.getElementById("back-to-top");
backToTopButton.addEventListener("click", function() {
    window.scrollTo(0, 0);
    
});

async function logMovies() {
  const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  const movies = await response.json();
  console.log(movies);
}
logMovies()
