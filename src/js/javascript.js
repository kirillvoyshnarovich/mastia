                
                // Prototype for main Slaider and Recent projects slaider //
function Slider(element) {
    this.element = document.querySelector(element);
    this.init();
    var slider = this;
    var body = document.querySelector("body");
    // window.addEventListener("resize", function( e ) {
    //     slider.init();
    // })
}

Slider.prototype = {
    init: function() {
        this.sliders = this.element.querySelectorAll(".slider-wrapper__slide");
        this.sliderWrapper = this.element.querySelector(".slider-wrapper");
        this.sliderControl = this.element.querySelectorAll(".button");
        var body = document.querySelector("body");
        this.countStep(body);

    },

    countStep: function(body) {
        this.widthBody = getComputedStyle(body).width;
        var widthWrapper = getComputedStyle(this.sliderWrapper).width;
        this.parentWidth();

        var widthPercent = (+(widthWrapper.replace("px",""))/+(this.widthParentElement.replace("px","")))*100;

        var length = this.sliders.length;
        this.step = widthPercent/length;

        this.navigate();
    },

    parentWidth: function() {
        var parent = this.element;
        this.widthParentElement;
        while(!(parent.tagName == "BODY")) {
            parent = parent.parentElement;
            if(parent.className == "conteiner") {
                this.widthParentElement = getComputedStyle(parent).width;
                break
            } else {this.widthParentElement = this.widthBody};
        }                      
    },

    navigate: function() {
        for(var i = 0; i < this.sliderControl.length; i++) {
            var button = this.sliderControl[i];
            this.controlEvents(button);
        }

    },

    controlEvents: function(button) {
        var self = this;
        this.counter = 0;
        button.addEventListener("click", function( e ){
            if(this.classList.contains("slider-control__right-arrow")){
                self.counter = self.counter + 1;

                var stopIndex = self.sliders.length - 3;

                if((self.step !== 100) && (self.counter > stopIndex)) {
                    self.counter = stopIndex;
                }
                    
                if(self.counter == self.sliders.length) {
                    self.counter = self.sliders.length - 1;
                }
                self.sliderWrapper.style.left = "-" + self.counter * self.step + "%";
                


            } else {
                    self.counter = self.counter - 1;

                    if(self.counter < 0) {
                        self.counter = 0;
                    }
                    self.sliderWrapper.style.left = "-" + self.counter * self.step + "%";
            }

        })
    }
}

document.addEventListener( "DOMContentLoaded", function() {
	var mainSlider = new Slider( ".slider" );
});

document.addEventListener("DOMContentLoaded",function() {
    var recentProjectsSlider = new Slider( ".recent-projects__slaider" );
})


                        //  Posts Slaider //
var postsSlaider = document.querySelector(".posts-slaider");
var buttonRight = postsSlaider.querySelector(".control-bottom__slaider-right-control");
var buttonLeft = postsSlaider.querySelector(".control-bottom__slaider-left-control");
var posts = postsSlaider.querySelectorAll(".posts__block");

var counter = 0;

buttonRight.addEventListener("click", function() {
    posts[counter].classList.remove("post-blog_show")
    counter = counter + 1;

    if( counter >= posts.length){
      counter = 0;  
    }

    posts[counter].classList.add("post-blog_show");

}); 

buttonLeft.addEventListener("click", function() {
    posts[counter].classList.remove("post-blog_show")
    counter = counter - 1;

    if( counter < 0){
      
        counter = posts.length - 1;
    }
    
    posts[counter].classList.add("post-blog_show");

}); 



