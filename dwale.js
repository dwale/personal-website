var view = $("#card");
var move = "100px";
var sliderLimit = -750

function scrollright () {
  console.log('clicked');

  $("#right").click(function(){
    event.preventDefault();
        $('#card').animate({
          marginLeft: "-=200px"
        }, "fast");
  });
}

$("#leftArrow").click(function(){

  var currentPosition = parseInt(view.css("left"));
  if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400})

});

const el = document.querySelector("#banner");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});