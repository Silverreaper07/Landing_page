// window.addEventListener('scroll', reveal);

// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');

//   for(var i = 0; i < reveals.length; i++){

//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     if(revealtop < windowheight - revealpoint){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }

// const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
// console.log(height+" "+width);
// $("body").css("height","500%");
// $("body").css("width","400%");

var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

console.log('Your OS: '+OSName);

if (navigator.appVersion.indexOf("Win")!=-1) {

    $(".header-text").css('font-size','2rem');

    $(".main-text").css('font-size','2.5rem');

    $(".about-heading").css('top','155%');
    $(".about-heading").css('left','23%');
    $(".about-heading").css('font-size','6rem');

    $("p.test").css('font-size','1.1rem');

    $("test").css('bottom','230px');
    $("h1.reveal").css('bottom','230px');
} 

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
   // var revealpoint = 150;

    if(revealtop< windowheight){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 800);
  return false;
});
