/* accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* flickity */
/* sec_1 */
var elem = document.querySelector('.sec_1-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true
});

var flkty = new Flickity( '.sec_1-carousel', {

});

/* sec_2 */
var elem = document.querySelector('.sec_2-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true
});

var flkty = new Flickity( '.sec_2-carousel', {

});