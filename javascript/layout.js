$(document).ready(function(){
  build(16);
});

function replot(){
  var num = prompt("Enter the number of squares in the n x n matrix - ");
  build(num);
}

function build(size){
  $(".container").empty();

  var number = Math.floor(100* 960 / size) / 100 -2;
  for(var i=0;i< size * size;i++){
    $(".container").append('<div class ="box"></div>');
  }
  $(".box").css("height", number + "px");
  $(".box").css("width", number + "px");

  style1();

}

function eraze(){
  build(16);
}

var style1 = function() {
  $(".box").hover(function(){
    $(this).css("background-color", "#59B3D9");
  });
}
