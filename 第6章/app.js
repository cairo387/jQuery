$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});

//mouseover:マウスを重ねると
//mouseout:マウスを離すと

$(function(){
  $('.box2').mouseover(function(){
    $('.box2').addClass('box1-ext')
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box1-ext')
  });
});

//addClass('クラス名')：属性付与
//removeClass('クラス名')：属性離す

$(function(){
  $('.box3').on('click', function(){
    $('.box3').addClass('box1-ext')
  });
  $('.box3').mouseout(function(){
    $('.box3').removeClass('box1-ext')
  });
});