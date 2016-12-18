$.fn.clicktoggle = function(a,b){
    return this.each(function(){
        var clicked = false;
        $(this).bind("click",function(){
            if (clicked) {
                clicked = false;
                return b.apply(this,arguments);
            }
            clicked = true;
            return a.apply(this,arguments);
        });
    });// fixed typo here, was missing )
};


var randomColor=function(){

  var first= Math.floor(Math.random(256)*256);
  var second=Math.floor(Math.random(256)*256);
  var third=Math.floor(Math.random(256)*256);
  var rc=first+','+second+','+third;
  return 'rgb('+rc+')'
};

var changeColorRandom = function() {
  $('.unmarked').mouseenter(function() {
  $(this).addClass('marked');
  $(this).removeClass('unmarked');
  
  $(this).css("background-color",randomColor());
  
        
  });
};



var setBoxSize = function (size){
  $('.box').width(($('#container').width())/size);
  $('.box').height($('#container').height()/size);
  $('.box').css("box-sizing","border-box");
};

var changeColor = function() {
  $('.unmarked').mouseenter(function() {
        $(this).removeClass('unmarked');
        $(this).addClass('marked');
        $(this).css("background-color","black");
        
  });
};


var createGrid = function(size) {
  
  for (var j = 0; j < size; j++) {
    for (var i = 0; i < size; i++) {
      $('#container').append('<div class="box unmarked"></div>');
    }
  }
  setBoxSize(size);
  changeColor();

};


var createGridRandom = function() {

  var x=$(window).width();
  var ntopboxes=x/12;
  for (var i=0;  i<ntopboxes*10; i++){
          $('#top').append('<div class="topbox"></div>');

         
    }

    $('#top div').each(function(j){
$(this).attr("id", j);

    });

  $('.topbox').height(12);
  $('.topbox').width(12);
  $('.topbox').css("box-sizing","border-box");
  

    
};

// CREATE RANDOM BACKGROUND COLOR WITH TIME INTERVAL
var randomColorChange=function(){

var randomBoxPicker=function(){

var random_id= Math.floor(Math.random(1400)*1400);
return "#"+random_id
};

$(randomBoxPicker()).css("background-color",randomColor());


};


var reset = function() {
  $('.marked').css("background-color","white");
  $('.marked').addClass('unmarked');
  $('.marked').removeClass('marked');

  
};

var resize = function() {
    var i= prompt("What grid size would you like?");
     $('.box').remove();
    return i;   

};





$(document).ready(function() {

  createGridRandom();
  setInterval(randomColorChange,2000);
  createGrid(24);
  
  $('#reset').click(reset);

  $('#resize').click(function(){
createGrid(resize());

  });

  
  $('#random').clicktoggle(changeColorRandom,changeColor);

  

});



