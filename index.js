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