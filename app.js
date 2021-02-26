/*$(function(){
  $('.box1').slideDown();
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px',
    'width': '200px'
  });
  $('.box1').slideUp();
});*/

$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});

//$( セレクタ ).メソッド ( パラメータ );
//セレクタ：body
//メソッド：html
//パラメータ'<h1>Hello jQuery!!</h1>'

//slideDown(速度);: 上から下へ(現れる).単位はミリ秒.1秒の場合は'1000'
//slideUp(速度);: 下から上へ(消えていく)
//show();:非表示状態にあるものを表示
//hide();:一瞬だけ表示