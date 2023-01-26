let images = Array.from(document.getElementsByClassName("imgCarousel"))

let mainPhoto = document.getElementById("mainPhoto")

function updateImage(event){
    let image = event.target

    mainPhoto.src = image.src
}

images.forEach(function(image) {
    image.addEventListener("click", updateImage)
});

let docTitle  = document.title;
window.addEventListener("blur", ()  =>  {
  document.title = "Comeback :(";
})
window.addEventListener("focus", () =>   {
  document.title = docTitle;
})