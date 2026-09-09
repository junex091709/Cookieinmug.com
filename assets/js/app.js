/************* Main Js File ************************

/*------------------------------------------------------------------------------------ 
JS INDEX
=============
01 - HEADER JS
02 - PRICING PLANS ACTIVE
03 - ACTIVE MENU
04 - SCROLL TO TOP BUTTON
05 - CUT,COPY PASTE FORM JS
06 - DOWNLOAD POLICIE, PRINT ICON JS
07 - ONE TIME POPUP JS
08 - LIVE CHAT LOAD JS
09 - Footer JS
10 - DROPDOWN ACTIVE, PAGE BACKGROUND BLUR JS
11 - ANNIMATION JS
12 - FEATURES HOVER EFFECTS
13 - MOBILE CLICK TO MENU CLOSE
-------------------------------------------------------------------------------------*/


/* 
=================================================================
01 - HEADER JS
=================================================================	
*/

//menu fixed on scroll
$(document).ready(function () {
  headerFixed();
});
$(document).on('scroll', function () {
  headerFixed();
});
function headerFixed() {
  if ($(window).scrollTop() >= 20) {
    $('header').addClass('fixed-menu');
    $("#main-header-logo").css("display", "block");
    $("#navbarNav").addClass("justify-content-end");
  } else {
    $('header').removeClass('fixed-menu');
    $("#main-header-logo").css("display", "none");
    $("#navbarNav").removeClass("justify-content-end");
  }
}

/* 
=================================================================
02 - PRICING PLANS ACTIVE
=================================================================	
*/

// $(document).ready(function () {
//   $(".silver-plan").click(function () {
//     $(".silver-plan").addClass("active-plan");
//     $(".gold-plan").removeClass("active-plan");
//   });

//   $(".gold-plan").click(function () {
//     $(".gold-plan").addClass("active-plan");
//     $(".silver-plan").removeClass("active-plan");
//   });
// });

$(".plan").click(function () {
  $(".plan").removeClass("active");
  $(this).addClass("active");
});

/* 
=================================================================
03 - ACTIVE MENU
=================================================================	
*/

$(document).ready(function () {
  $("#navbarNav .tabActive a").click(function () {
    $("#navbarNav .tabActive a").removeClass("active");
    $(this).addClass("active");
  });
  $(function () {
    var path = window.location.href;
    var pop = [];
    $('#navbarNav .tabActive a').each(function () {
      var anchor = $(this).prop('href').split("/").pop();
      pop.push(anchor);
      var href = this.href.replace(".html", "").replace(".php", "");
      var navPath = path.replace(".html", "").replace(".php", "");
      if (href === navPath) {
        $(this).addClass('active');
      }
    });
    var anchor = $('#navbarNav .tabActive a[href*="' + pop[0] + '"]');
    if (path.split('/').pop() == "") {
      $(anchor).addClass("active")
    }
  });
});

/* 
=================================================================
04 - SCROLL TO TOP BUTTON
=================================================================	
*/

var btn = $('#button');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


/* 
=================================================================
05 - CUT,COPY PASTE FORM JS
=================================================================	
*/

$(document).ready(function () {
  $('.input-disabled-form input, .input-disabled-form textarea').on("cut copy paste", function (e) {
    e.preventDefault();
  });
});


/* 
=================================================================
06 - DOWNLOAD POLICIE, PRINT ICON JS
=================================================================	
*/

$("body").on("click", ".print", function () {
  printDiv('condition-block')
});
function printDiv(elementId) {
  var a = document.getElementById('printing-css').value;
  var b = document.getElementById(elementId).innerHTML;
  window.frames["print_frame"].document.title = document.title;
  window.frames["print_frame"].document.body.innerHTML = '<style>' + a + '</style>' + b;
  window.frames["print_frame"].window.focus();
  window.frames["print_frame"].window.print();
}


/* 
=================================================================
07 - ONE TIME POPUP JS
=================================================================	
*/

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

$(document).ready(function () {
  $("#accept_condition").click(function () {
    setCookie("accept_condition", "yes", 30);
  });
  if (getCookie("accept_condition") == "yes") {
    $('#myModal').modal('hide');
  } else {
    $('#myModal').modal('show');
  }
});



/* 
=================================================================
08 - LIVE CHAT LOAD JS
=================================================================	
*/

window.__lc = window.__lc || {};
window.__lc.license = 9759495;
(function () {
  var lc = document.createElement('script');
  lc.type = 'text/javascript';
  lc.async = true;
  lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
    'cdn.livechatinc.com/tracking.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(lc, s);
})();


/* 
=================================================================
09 - FOOTER JS
=================================================================	
*/

$(window).bind("resize", function () {
  if ($(this).width() > 991) {
    $(".footer-links .footer-title").removeAttr("data-bs-toggle");
  } else {
    $('.footer-links .footer-title').attr('data-bs-toggle', 'collapse');
  }
}).trigger('resize');


/*
=================================================================
10 - DROPDOWN ACTIVE, PAGE BACKGROUND BLUR JS
=================================================================
*/

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("overley");
    $('header').addClass('fixed-menu');
    $("#main-header-logo").css("display", "block");
    $("#navbarNav").addClass("justify-content-end");
    $("#teams-dropdown-menu ul").removeClass("active");
    
  });
  $(".mob-click, #teams-dropdown-menu").click(function () {
    $(".navbar-toggler").addClass("collapsed")
    $(".navbar-collapse").removeClass("show")
    $("body").removeClass("overley");
    $(".navbar-toggler").attr("aria-expanded", "false");
    $(".navbar").removeClass("active-navbar");
  });
});

$(window).on('resize', function () {
  var win = $(this);
  if (win.width() >= 1200) {
    $("body").removeClass("overley");
  }
  else {
    $(".navbar-toggler").addClass("collapsed")
    $(".navbar-collapse").removeClass("show")
    $("body").removeClass("overley");
    $(".navbar-toggler").attr("aria-expanded", "false");
    $(".navbar").removeClass("active-navbar");
  }
});


/*
=================================================================
11 - ANNIMATION JS
=================================================================
*/

$(document).ready(function () {
  new WOW().init();
});


/*
=================================================================
12 - FEATURES HOVER EFFECTS
=================================================================
*/

$(document).ready(function(){
  $(".provide-features").hover(function(){
      $(".provide-features").removeClass("active-features");
      $(this).toggleClass("active-features"); 
  });
});


/*
=================================================================
13 - MOBILE CLICK TO MENU CLOSE
=================================================================
*/
$('#navbarNav li a').on("click", function () {
  $('#mobile-button').click();
});
$(window).bind("resize", function () {
  if ($(this).width() >= 1200) {
    $(".navbar-toggler").removeAttr("id");
  } else {
    $('.navbar-toggler').attr('id', 'mobile-button');
  }
}).trigger('resize');

/*
=================================================================
13 - FOR GOOGLE TRANSLATE CODE JS START HERE
=================================================================
*/
function googleTranslateElementInit(select) {
  new google.translate.TranslateElement({
      // pageLanguage: 'en',
      includedLanguages: 'en,fr',
  }, 'google_translate_element');
  var select = document.querySelector('select.goog-te-combo');
  select.value = "";
  select.dispatchEvent(new Event('change'));
  var cache = document.querySelector('select.goog-te-combo');
  document.getElementById("dropBlock_wrapper").prepend(cache);
}
function toggleActive(self) {
  let ul = self.getElementsByTagName('ul')[0];
  if (ul.classList.contains('active')) {
      ul.classList.remove('active');
  } else {
      ul.classList.add('active');
  }
}
function translatePage(lng) {
  var select = document.querySelector('select.goog-te-combo');

  if (select) {
      select.value = lng;
      select.dispatchEvent(new Event('change'));
  }
  else {
      setTimeout(function () { translatePage(lng); }, 500);
  }
}
function reloadPage(ms) {
  setTimeout(function () { document.location.reload(); }, ms);
}
function setLng(value) {
  var select = document.querySelector('select.goog-te-combo');

  if (select) {
      select.value = value;
      select.dispatchEvent(new Event('change'));
  }

  $.ajax({
      type: "POST",
      url: '/api/set-lng', // change url as your 
      data: 'setLng=' + value,
      // dataType: 'json',
      success: function (data) {
          // alert(data);
          reloadPage(1000);
      }
  });
}
$(window).on("load", function () {
  setTimeout(function () {
      $("body").removeClass('overflow-hidden');
      $(".loader").fadeOut("fast");
  }, 1000);
});

/* FOR GOOGLE TRANSLATE CODE JS START HERE */

/* GOOGLE TRANSLATE FLAG CHANGE */
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

if (getCookie("googtrans") == "/auto/fr") {
  $(".drop-flg-block").find("img").attr('src', 'assets/images/flag/fr.png');
} else {
  $(".drop-flg-block").find("img").attr('src', 'assets/images/flag/en.png');
}

if (getCookie("googtrans") == "/auto/fr") {
  $("body").addClass('fr_wrapper');
} else {
  $("body").removeClass('fr_wrapper');
}

$(document).ready(function(){
  setTimeout(() => {
    $.fn.spaceremove();
  }, 1500);

  $.fn.spaceremove = function () {
    setTimeout(() => {
      $("body font").children().each(function() {
      
      / NORMAL SPACE BEFORE SPECIAL CHARACTER /
      $(this).html($(this).html().replace(/ [!]/g,"!").replace(/ [?]/g,"?").replace(/ [,]/g,",").replace(/ [.]/g,".").replace(/ [*]/g,"*").replace(/ [$]/g,"$").replace(/ [€]/g,"€").replace(/ [:]/g,":").replace(/ [@]/g,"@").replace(/ [#]/g,"#").replace(/ [%]/g,"%").replace(/ [&]/g,"&").replace(/ [;]/g,";").replace(/ [{]/g,"{").replace(/ [}]/g,"}").replace(/ [<]/g,"<").replace(/ [>]/g,">").replace(/ [/]/g,"/"));
      
      / &NBSP; SPACE BEFORE SPECIAL CHARACTER /
      $(this).html($(this).html().replace(/&nbsp;[!]/g,"!").replace(/&nbsp;[?]/g,"?").replace(/&nbsp;[,]/g,",").replace(/&nbsp;[.]/g,".").replace(/&nbsp;[*]/g,"*").replace(/&nbsp;[$]/g,"$").replace(/&nbsp;[€]/g,"€").replace(/&nbsp;[:]/g,":").replace(/&nbsp;[@]/g,"@").replace(/&nbsp;[#]/g,"#").replace(/&nbsp;[%]/g,"%").replace(/&nbsp;[&]/g,"&").replace(/&nbsp;[;]/g,";").replace(/&nbsp;[{]/g,"{").replace(/&nbsp;[}]/g,"}").replace(/&nbsp;[<]/g,"<").replace(/&nbsp;[>]/g,">").replace(/&nbsp;[/]/g,"/"));
      
      / BLANK SPACE BEFORE SPECIAL CHARACTER /
      $(this).html($(this).html().replace(/ [!]/g,"!").replace(/ [?]/g,"?").replace(/ [,]/g,",").replace(/ [.]/g,".").replace(/ [*]/g,"*").replace(/ [$]/g,"$").replace(/ [€]/g,"€").replace(/ [:]/g,":").replace(/ [@]/g,"@").replace(/ [#]/g,"#").replace(/ [%]/g,"%").replace(/ [&]/g,"&").replace(/ [;]/g,";").replace(/ [{]/g,"{").replace(/ [}]/g,"}").replace(/ [<]/g,"<").replace(/ [>]/g,">").replace(/ [/]/g,"/"));
      
      });
    }, 1500);
  };
});

$(".nav-link, header .openmodal, #accordion .card").click(function(){
  $.fn.spaceremove();
});