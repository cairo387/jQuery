$(function() {
  //#back内のaタグがクリックされたときの処理
  $('#back a').on('click',function(event){
    $('body, html').animate({
      /*ScrollTop：スクロール位置を取得できるメソッド*/
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

/*マウスクリックの際の記述方法
$('.セレクタ名').on('click', function(event) {
  イベント発生時に行われる処理
});
*/

/*アニメーション効果を設定するjQueryの関数
$('セレクタ名').animate({
  変化対象のプロパティ名:変化値
}, アニメーションの動作時間);
*/