$(function() {
  $('.menu-trigger').on('click', function(event){
    //.toggleClass():（今回の場合では）activeクラスがなければactiveクラスを作る。あればactiveクラスを削除する。
    $(this).toggleClass('active');
    //.fadeToggle(): 要素のフェードイン・フェードアウトを切り替えるメソッド。
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
