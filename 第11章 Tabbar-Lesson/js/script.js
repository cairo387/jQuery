$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $('#tab-contents .tab').hide();
  $('#tab-menu .active').removeClass("active");
  $(this).addClass('active');
  $($(this).attr("href")).show();
  event.preventDefault();
});

//$()関数:特定の属性を持つ要素や属性値を絞り込むことができる。
/*属性値が特定の値に等しい要素だけを取得したいときは
$('要素[属性 = "値"]')*/

/*属性値が特定の値に等しくない要素だけを取得したいときは
$('要素[属性 != "値"]')*/

/*$('#tab-menu .active').removeClass("active");
.removeClass()クラス属性が設定されているHTML要素から、クラスを削除する。*/

//thisはクリックされた要素のこと

//.attr():HTML要素の属性を取得したり設定できるメソッド
//href属性を取得するように指定しています。