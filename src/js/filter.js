function Filter(filters, gallery) {
    this.filter = document.querySelector(filters);
    this.gallery = document.querySelector(gallery);
    this.init();
}

Filter.prototype = {
    init: function() {
        this.filterItem = this.filter.querySelectorAll(".filters__list-item");
        this.galleryItem = this.gallery.querySelectorAll(".project-block__image");
        this.listFilters();
    },

    listFilters: function() {
        for(var i = 0; i < this.filterItem.length; i++) {
            var item = this.filterItem[i];
            this.event(item);
        }
    },

    change: function (src) {
        for(var j = 0; j < this.galleryItem.length; j++) {
            var i = j + 1;
            this.galleryItem[j].src = "image/project-page/" + src + "-" + i + ".png";
        }
    },

    event: function(item) {
        var el = this;
        item.addEventListener("click", function( e ) {
            var target = this.getAttribute("data-filter");

            var src = (target == "all") ? "pic-for-gallery-all": //написать регулярным
                      (target == "web") ? "pic-for-gallery-web":
                      (target == "html") ? "pic-for-gallery-html":
                      (target == "wordpress") ? "pic-for-gallery-wordpress":
                      (target == "ui") ? "pic-for-gallery-ui": "";

            el.change(src);
        })
    },
}

document.addEventListener("DOMContentLoaded", function() {
    var element = new Filter(".filters", ".gallery");
})