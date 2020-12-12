
alert("Hello");
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var text=this.innerHTML;
  make_sound(text);
  button_animation(text);



});
}

document.addEventListener("keydown",function(event){
  make_sound(event.key);
  button_animation(event.key);
});

function make_sound(text)
{
  switch (text) {
    case "w":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
     break;
      case "a":
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
      case "s":
      var audio=new Audio('sounds/snare.mp3');
      audio.play();
      break;
      case "d":
      var audio=new Audio('sounds/tom-1.mp3');
      audio.play();

      break;
      case "j":
      var audio=new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
      case "k":
      var audio=new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
      case "l":
      var audio=new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    default:

  }
}
function button_animation(text){
   var active_button = document.querySelector("."+text)
   active_button.classList.add("pressed");
   setTimeout(function(){active_button.classList.remove("pressed");},100);
}
