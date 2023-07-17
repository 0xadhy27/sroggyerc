var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {
    $(document).scrollTop(0);
});

// loader :: starts
loader();

function loader(_success) {
    let obj = document.querySelector(".preloader"),
        inner = document.querySelector(".preloader_inner");
    $("body").addClass("overflow");

    let w = 0,
        t = setInterval(function() {
            w = w + 1;
            $(".progress-bar").css("width", w + "%");
            $(".progress-bar").attr("aria-valuenow", w + "%");
            inner.textContent = w + "%";
            if (w === 100) {
                obj.classList.add("hide");
                $("body").removeClass("overflow");

                new WOW().init({
                    offset: 100,
                });

                // Banner Carousel Initialization :: used for banner section slider
                $(".banner-carousel").owlCarousel({
                    items: 1,
                    nav: true,
                    dots: true,
                    loop: true,
                    smartSpeed: 700,
                    autoplay: true,
                    animateOut: "fadeOut",
                    autoplayTimeout: 7000,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>',
                    ],
                });

                // page.classList.add('show');
                clearInterval(t);
                w = 0;
                if (_success) {
                    return _success();
                }
            }
        }, 20);
}
// loader :: ends

// Header :: Start
$(window).scroll(function() {
    if ($(window).scrollTop() >= 150) {
        $("header").addClass("header-sm");
    } else {
        $("header").removeClass("header-sm");
    }
    didScroll = true;
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

$(".nav-menu-button").on("click", function() {
    $("body").toggleClass("mobile-menu-open");
});

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
        $("header").removeClass("nav-down").addClass("nav-up");
    } else {
        if (st + $(window).height() < $(document).height()) {
            $("header").removeClass("nav-up").addClass("nav-down");
        }
    }
    lastScrollTop = st;
}

// Header :: End

// Menu
$(".nav-link").on("click", function() {
    if (!$(this).hasClass("dropdown-toggle")) {
        $("body").toggleClass("mobile-menu-open");
    }
});

// feature :: Starts
$(".features.owl-carousel").owlCarousel({
    margin: 130,
    loop: true,
    items: 2.75,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1.25,
            margin: 14,
            // autoWidth: false,
        },
        768: {
            nav: false,
            items: 1.75,
            margin: 100,
            // autoWidth: false,
        },
        1024: {
            items: 2,
            margin: 100,
            autoWidth: false,
        },
        1280: {
            items: 2.75,
            margin: 90,
        },
        1440: {
            items: 2.75,
            margin: 100,
        },
    },
});
// feature Carousel :: Ends

// team-member-section :: Starts
async function owlInitialize() {
    if ($(window).width() < 767) {
        $(".team-content").addClass("owl-carousel owl-theme");
        triggerMobileOwl();
    } else {
        $(".team-content").owlCarousel("destroy");
    }
}

function triggerMobileOwl() {
    $(".team-content").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                margin: 14,
                items: 1.5,
                autoWidth: false,
                center: true,
                loop: true,
            },
        },
    });
}
$(document).ready(function(e) {
    owlInitialize();
});
$(window).resize(function() {
    owlInitialize();
});
// team-member-section :: Ends

// Mobile Code:starts//
if ($(window).width() <= 991) {
    $(".roadmap-list li").on("click", function() {
        $(this).toggleClass("open");
        $(this).siblings("li").find(".roadmap-images").slideUp();
        $(this).find(".roadmap-images").slideToggle().css("display", "flex");
    });
}

// FAQs :: Starts
$(".accordian-title").on("click", function() {
    $(this).toggleClass("open");
    $(this).siblings(".accordian-content").slideToggle();
});
// FAQs :: Ends

if ($(window).width() <= 767) {
    // Footer :: Starts
    $(".footer-links h5").on("click", function() {
        $(this).siblings("ul").slideToggle();
        $(this).toggleClass("open");
    });
    // Footer :: Ends
}
// Mobile Code :ends//

//faq section:starts//
$(".faq-tab-links li").on("click", function(e) {
    const currentClick = $(this).text().toLowerCase();
    $(this).addClass("active");
    $(this).siblings("li").removeClass("active");
    $(this)
        .parents(".owl-item")
        .siblings(".owl-item")
        .find("li")
        .removeClass("active");
    $(".faq-tab-content > div").hide();
    $(`.${currentClick}-content`).show();
});

//faq section:ends//

$(window).ready(function() {
    $(".banner-floating-images").height($(".banner-floating-images").width());
    $(".join-us-wrapper").height($(".join-us-wrapper").width());
});
$(window).resize(function() {
    $(".banner-floating-images").height($(".banner-floating-images").width());
    $(".join-us-wrapper").height($(".join-us-wrapper").width());
});

}
/*
     FILE ARCHIVED ON 22:00:44 May 06, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:42:03 Jul 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 131.911
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  cdx.remote: 0.057
  esindex: 0.01
  LoadShardBlock: 99.235 (3)
  PetaboxLoader3.datanode: 79.31 (5)
  PetaboxLoader3.resolve: 282.701 (2)
  load_resource: 283.762
  loaddict: 29.698
*/