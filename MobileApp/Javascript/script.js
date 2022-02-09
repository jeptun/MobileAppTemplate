/*Script pro zobrazeni  myLinks */
function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*Funkce na pro zobrazení drobečkového menu */
function toggleDiv() {
  var xs = document.querySelectorAll(".dropdown-content");
  // Declare i and qty for "for" loop
  var quantity = xs.length;
  // Use "for" loop to iterate through NodeList
  for (i = 0; i < quantity; i++) {
    // If this div.image at index [i] is "none"...
    if (xs[i].style.display === "block") {
      // then make it "block"...
      xs[i].style.display = "none";
    } else {
      // otherwise set display to "none"
      xs[i].style.display = "block";
    }
  }
}
/*
var dropdown = document.getElementsByClassName("dropdown-rip");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
*/
/* Funkce na změnu animace Hamburgermenu  */
function flipIcon(x) {
  x.classList.toggle("change");
}

/*Funkce pro Tabmenu  */
function openSection(sekce) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(sekce).style.display = "block";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*Zoom-Gallery */
$(document).ready(function () {
  $(".zoom-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      },
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});

/*Sticky Bar*/

window.onscroll = function () {
  stickyBar();
};

var navbar = document.getElementById("stickbar");
var sticky = navbar.offsetTop;
function stickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});
