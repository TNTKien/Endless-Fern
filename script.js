var maxHeightScrolled = 0;
window.onscroll = function() {
    var heightScrolled = window.scrollY;

    // if (heightScrolled > maxHeightScrolled) {
    //     maxHeightScrolled = heightScrolled;
    // }

    //var fernHeight = maxHeightScrolled*0.05645;
    var fernHeight = heightScrolled*0.05645;

    var heightScrolledElement = document.getElementById("header");
    heightScrolledElement.innerHTML = "Your Fern now is " + fernHeight + "cm";
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