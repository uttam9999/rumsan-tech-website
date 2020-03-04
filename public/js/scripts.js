(function($) {
  "use strict";
  $(function() {
    $('.header-menu a[href="#"]').on("click", function(event) {
      event.preventDefault();
    });
    $(".header-menu").menumaker({
      title: '<i class="fas fa-bars"></i>',
      format: "multitoggle"
    });
    var mainHeader = $(".main-header");
    if (mainHeader.length) {
      var sticky = new Waypoint.Sticky({
        element: mainHeader[0]
      });
    }
    var moveableImage = $(".banner-image");
    if (moveableImage.length) {
      var parallaxImage = new Parallax(moveableImage[0]);
    }
    var bgImg = $("[data-bg-img]");
    bgImg.css("background", function() {
      return "url(" + $(this).data("bg-img") + ") center top";
    });
    $("form").parsley();
    var $commentContent = $(".comment-content > a");
    $commentContent.on("click", function(event) {
      event.preventDefault();
      var $target = $(".comment-form");
      if ($target.length) {
        $("html, body").animate(
          {
            scrollTop: $target.offset().top - 120
          },
          500
        );
        $target.find("textarea").focus();
      }
    });
    var pricingSlider = new Swiper(".pricing-slider", {
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      spaceBetween: 2,
      allowTouchMove: false,
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: ".pricing-pagination",
        clickable: true
      },
      breakpoints: {
        575: {
          slidesPerView: 1
        }
      }
    });
    var reviewSlider = new Swiper(".review-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: ".review-pagination",
        clickable: true
      },
      breakpoints: {
        575: {
          slidesPerView: 1
        },
        991: {
          slidesPerView: 2
        }
      }
    });
    var $youtubePopup = $(".youtube-popup");
    if ($youtubePopup.length) {
      $youtubePopup.magnificPopup({
        type: "iframe"
      });
    }
    var $backToTopBtn = $(".back-to-top");
    if ($backToTopBtn.length) {
      var scrollTrigger = 400,
        backToTop = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $backToTopBtn.addClass("show");
          } else {
            $backToTopBtn.removeClass("show");
          }
        };
      backToTop();
      $(window).on("scroll", function() {
        backToTop();
      });
      $backToTopBtn.on("click", function(e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0
          },
          700
        );
      });
    }
    jQuery("img.svg").each(function() {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      jQuery.get(
        imgURL,
        function(data) {
          var $svg = jQuery(data).find("svg");
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          $svg = $svg.removeAttr("xmlns:a");
          if (
            !$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              "viewBox",
              "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
            );
          }
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
    var typedElement = ".typed",
      typedTarget = $(typedElement);
    if (typedTarget.length) {
      var typed = new Typed(typedElement, {
        strings: [
          "We are rumsanTech team.",
          "We uplift your web presence",
          "We matter your development"
        ],
        typeSpeed: 50,
        backSpeed: 10,
        loop: true
      });
    }
    var typedElementSecond = ".typed-second",
      typedTargetSecond = $(typedElementSecond);
    if (typedTargetSecond.length) {
      var typed = new Typed(typedElementSecond, {
        strings: ["Responsive.", "Retina Ready.", "Bootstrap 4 Supported."],
        typeSpeed: 50,
        backSpeed: 10,
        loop: true
      });
    }
    var colorSheets = [
      {
        color: "#7cd273",
        title: "Switch to color-1",
        href: "css/colors/theme-color-1.css"
      },
      {
        color: "#ff6c00",
        title: "Switch to color-2",
        href: "css/colors/theme-color-2.css"
      },
      {
        color: "#905f36",
        title: "Switch to color-3",
        href: "css/colors/theme-color-3.css"
      },
      {
        color: "#ea9926",
        title: "Switch to color-4",
        href: "css/colors/theme-color-4.css"
      },
      {
        color: "#303030",
        title: "Switch to color-5",
        href: "css/colors/theme-color-5.css"
      },
      {
        color: "#dd1b1b",
        title: "Switch to color-6",
        href: "css/colors/theme-color-6.css"
      },
      {
        color: "#7d1935",
        title: "Switch to color-7",
        href: "css/colors/theme-color-7.css"
      },
      {
        color: "#31135c",
        title: "Switch to color-8",
        href: "css/colors/theme-color-8.css"
      },
      {
        color: "#005a31",
        title: "Switch to color-9",
        href: "css/colors/theme-color-9.css"
      },
      {
        color: "#1b435d",
        title: "Switch to color-10",
        href: "css/colors/theme-color-10.css"
      }
    ];
    ColorSwitcher.init(colorSheets);
  });
  $(window).on("load", function() {
    function removePreloader() {
      var preLoader = $(".preLoader");
      preLoader.fadeOut();
    }
    setTimeout(removePreloader, 250);
  });
  $(window).on("load", function() {
    var $animateEl = $("[data-animate]");
    $animateEl.each(function() {
      var $el = $(this),
        $name = $el.data("animate"),
        $duration = $el.data("duration"),
        $delay = $el.data("delay");
      $duration = typeof $duration === "undefined" ? "0.6" : $duration;
      $delay = typeof $delay === "undefined" ? "0" : $delay;
      $el.waypoint(
        function() {
          $el.addClass("animated " + $name).css({
            "animation-duration": $duration + "s",
            "animation-delay": $delay + "s"
          });
        },
        {
          offset: "93%"
        }
      );
    });
  });
})(jQuery);
