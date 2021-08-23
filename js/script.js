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

/* Initialise Carousel */
const myCarousel_1 = new Carousel(document.querySelector("#myCarousel_1"), {
  preload: 2,
  infinite: false,
  center: true,
  fill : true,
});

/* Customize Fancybox */
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,
  
  closeButton: "top",

  Carousel: {
    Dots: true,
    on: {
      change: (that) => {
        myCarousel_1.slideTo(myCarousel_1.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});


/* Initialise Carousel */
const myCarousel_2 = new Carousel(document.querySelector("#myCarousel_2"), {
  preload: 2,
  infinite: false,
  center: true,
  fill : true,
});

/* Customize Fancybox */
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  closeButton: "top",

  Carousel: {
    Dots: true,
    on: {
      change: (that) => {
        myCarousel_2.slideTo(myCarousel_2.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});