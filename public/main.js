var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




const contenedorPeliculas = document.querySelector("#contenedorPeliculas")
peliculas.forEach(e => {
    let agregarItem =
    `<div class="card mt-4">
    <a href='${'#'}'><img src="${e.imagen}" class="card-img-top" ></a>
    <div class="card-body">
      <h5 class="card-text">${e.titulo}.</h5>
    </div>
  </div>`
  contenedorPeliculas.innerHTML += (agregarItem)
});

// DISPLAY: FLEX;
// FLEX-DIRECTION: COLUMN;
// HEIGHT: 100VH;
// JUSTIFY-CONTENT: s