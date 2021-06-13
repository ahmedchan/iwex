if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");

+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.tab");r||n.data("bs.tab",r=new a(this)),"string"==typeof e&&r[e]()})}var a=function(e){this.element=t(e)};a.VERSION="3.3.7",a.TRANSITION_DURATION=150,a.prototype.show=function(){var e=this.element,a=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var r=a.find(".active:last a"),i=t.Event("hide.bs.tab",{relatedTarget:e[0]}),s=t.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(i),e.trigger(s),!s.isDefaultPrevented()&&!i.isDefaultPrevented()){var o=t(n);this.activate(e.closest("li"),a),this.activate(o,o.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},a.prototype.activate=function(e,n,r){function i(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var s=n.find("> .active"),o=r&&t.support.transition&&(s.length&&s.hasClass("fade")||!!n.find("> .fade").length);s.length&&o?s.one("bsTransitionEnd",i).emulateTransitionEnd(a.TRANSITION_DURATION):i(),s.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=a,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var r=function(a){a.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery);
+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,a)),"string"==typeof e?n[e](o):a.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),s&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+s).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());o.is("a")&&i.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(n,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tab");s||o.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a"),n=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:s[0]});if(s.trigger(n),e.trigger(a),!a.isDefaultPrevented()&&!n.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})})}}},i.prototype.activate=function(e,o,s){function n(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}var a=o.find("> .active"),r=s&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var s=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(jQuery);

var iwax = {
    init: function( settings ) {
        iwax.config = {
            $win : $(window),
            $doc : $(document),
            $body : $(document.body),

            mobileNav : $('#mobile_nav'),
            nav : $('#nav'),

            $accordian: $('.collapse-panel'),

            mainSlider : $('#main_slider'),

            testimonialCarousel: $( '#testimonalSlide' ),
            storiesCarousel : $( '#stories' ),
            factsFigure : $('#facts_figure'),
            newNewSlider: $('#news-slider-new'),
            dzsparallaxer : $('.dzsparallaxer'),

            autoplaySpeed: 3000
        };

        iwax.config.$accordian.find('.collapse_area').hide();
 
        // Allow overriding the default config
        $.extend( iwax.config, settings );
        iwax.initEvens();
        iwax.initPlugins();

    },

    initEvens: function(){
        iwax.config.mobileNav.on('click', $.proxy(this.openMobileNav, this));
        iwax.config.$doc.on('click', '.nav_overlay', $.proxy(this.closeMobileNav, this));
        iwax.config.$accordian.find('.collapse_trigger').on('click', $.proxy(this.toggleAccordian, this));
    },

    openMobileNav: function(){
        iwax.config.nav.addClass('active');
        iwax.config.$body.addClass('scroll_lock').append('<div class="nav_overlay"></div>');
    },

    isRtl: function(){
        return $('html').attr('dir') == 'rtl'; 
    },

    closeMobileNav: function(){
        iwax.config.nav.removeClass('active');
        iwax.config.$body.removeClass('scroll_lock').find('.nav_overlay').remove();
    },

    close_accordion_section: function(){
        iwax.config.$accordian.find('.collapse_trigger').removeClass('active');
        iwax.config.$accordian.find('.collapse_area').slideUp(300);
    },

    toggleAccordian: function(evt){
        var $this = $(evt.currentTarget), target = $this.attr('target');
        
        if( $this.hasClass('active') ) {
            this.close_accordion_section();
        }else{
            this.close_accordion_section();
 
            // Add active class to section title
            $this.addClass('active');
            // Open up the hidden content panel
            $(target).slideDown(300); 
        }
        iwax.config.$accordian.find('.collapse_area').slideUp();
        $this.addClass('active').next().slideDown();
        
    },

    initPlugins: function(){
        var isRtl = this.isRtl() ? true : false;

        $( '#carouselEvent' ).slick({
            rtl: isRtl,
            prevArrow: isRtl? '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>' : '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
            nextArrow: isRtl? '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>' : '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });

        $('.lightbox').colorbox();

        iwax.config.testimonialCarousel.slick({
            rtl: isRtl,
            prevArrow: isRtl? '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>' : '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
            nextArrow: isRtl? '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>' : '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>'
        });

        iwax.config.mainSlider.slick({
            rtl: isRtl
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('is-animating');
        }).on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides.get(currentSlide)).addClass('is-animating');
        });

        iwax.config.storiesCarousel.slick({
            rtl: isRtl,
            appendArrows: $('#story_slide_arrows'),
            prevArrow: isRtl? '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>' : '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
            nextArrow: isRtl? '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>' : '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>'
        });

        iwax.config.factsFigure.slick({
            rtl: isRtl,
            appendArrows: $('#facts_figure_arrows'),
            prevArrow: isRtl? '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>' : '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
            nextArrow: isRtl? '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>' : '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>'
        });

        iwax.config.newNewSlider.slick({
            rtl: isRtl,
            responsive: [
                {
                  breakpoint: 620,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ],
            prevArrow: isRtl? '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>' : '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
            nextArrow: isRtl? '<span class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>' : '<span class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>'
        });

        if( iwax.config.dzsparallaxer.length ) {
            this.startDzsparallaxer();
        }
    },

    startDzsparallaxer: function(){
        var scrollWidth;

        if (scrollWidth === undefined) {
          parent      = $('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo(iwax.config.$body);
          child       = parent.children();
          scrollWidth = child.innerWidth() - child.height(99).innerWidth();
          parent.remove();
        }

        if (iwax.config.$body.width() + scrollWidth > 991) {
            iwax.config.dzsparallaxer.each(function(){
              var $this = $(this);
              var elOpion = $this.data('options');
              dzsprx_init(this, elOpion );
            });
        }
    }
};
 
$( document ).ready( iwax.init );
