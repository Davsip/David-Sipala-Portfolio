$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 3000
    // pagination: false
  });

  var typed = new Typed(".typed", {
    strings: [
      "Certified UX Designer.",
      "User Research.",
      "Product Designer",
      "and Web Developer."
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  $(".chart").easyPieChart({
    easing: "easInOUt",
    barColor: "#3498db",
    trackColor: false,
    scaleColor: false,
    lineWidth: 4,
    size: 152,
    onStep: function(from, to, percent) {
      $(this.el)
        .find(".percent")
        .text(Math.round(percent));
    }
  });

  var skillsTopOffset = $(".skills-section").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

 


	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




//  function to stick the navigation when scroling down 
  const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.removeClass("fixedNav");
		}




	}



});
