var setBoxSize = function (size){
  $('.box').width(($('#container').width())/size);
  $('.box').height($('#container').height()/size);
  $('.box').css("box-sizing","border-box");
};

var changeColor = function() {
  $('.box').mouseenter(function() {
    $(this).addClass("painted");

  });
};


var createGrid = function(size) {
  
  for (var j = 0; j < size; j++) {
    for (var i = 0; i < size; i++) {
      $('#container').append('<div class="box"></div>');
    }
  }
  setBoxSize(size);
  changeColor();
};


var reset = function() {

  $('.box').removeClass('painted');
};

var resize = function() {
   
    var i= prompt("What grid size would you like?");
    $('#container').empty();
    createGrid(i);   
};

$(document).ready(function() {
  createGrid(24);
  $('#reset').click(reset);
  $('#resize').click(resize);
});

