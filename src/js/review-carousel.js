function RewiewSlider (slider) {
    this.slider = document.querySelector(slider);
    this.init();
}

RewiewSlider.prototype = {
    init: function () {
        this.sliderWrapper = this.slider.querySelector(".reviews-slider");
        this.link = this.slider.querySelectorAll(".nav-slider__link");
        console.log(this.sliderWrapper);
        console.log(this.link);
        this.navigation()
    },

    navigation: function() {
        for(var i = 0; i <this.link.length; i++) {
            link = this.link[i];
            console.log(link);
            this.rotate(link);
        }
    },

    rotate: function (link) {
        var self = this;
        link.addEventListener ("click", function ( e ) {
            e.preventDefault();
            var currentLink = this;
            self.setCurrentLink(currentLink);
            var index = parseInt(currentLink.getAttribute("data-slide"), 10) + 1;
            var currentSlide = self.slider.querySelector( ".slide:nth-child(" + index + ")" );
            self.sliderWrapper.style.left = "-" + currentSlide.offsetLeft + "px";
        })
    },

    setCurrentLink: function( link ) {
        link.classList.add("current-link");
        for(var j = 0; j < this.link.length; j++){
            var a = this.link[j];
            if(a !== link) {
                a.classList.remove("current-link");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var reviewSlider = new RewiewSlider(".reviews")
})