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
  var slides = document.getElementsByClassName("mySlides");
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
function querryconfirmation() {
	alert("We will answer this querry within the next 24 hours. Thank you!");
}
function reserve() {
	alert("We have reserved a ticket in your preffered area.");
}
function newsletter(){
	alert("Thank you for signing up!")
}
function contact(){
	alert("We will send a response within the next 48 hours, thank you!")
}
function support(){
	alert("Thank you for the support! We will send you a confirmation email shortly.")
}