/* accordion */
var acc = document.getElementsByClassName("accordion");
var i;      
for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
  var elems = document.getElementsByClassName("accordion");
  var setClasses = !this.classList.contains('expanded');
  for(var it of elems) {
    console.log(it);
  it.classList.remove("expanded");
   it.nextElementSibling.style.maxHeight = null;
  }       
  if (setClasses) {
    this.classList.toggle("expanded");
    var panel = this.nextElementSibling;
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


/* Initialise Carouse2 */
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