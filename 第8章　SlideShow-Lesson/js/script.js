$(".theTarget").skippr({
  //スライドショーの変化（"fade" or "slide"）
  translation : 'fade',
  //変化にかかる時間（ミリ秒）
  speed : 5000,
  //easingの種類（easing:「最初はゆっくりで、徐々に早く変化させる」といった動きの「性格」を指定するもの）
  //linear： 等速で変化する。のっぺりとした安定した印象。
  //easeIn： 徐々に加速する。加速するような勢いのある印象。
  //easeOut： 徐々に減速する。変化の余韻が残りやすい印象。
  //easeInOut： 加速してから減速。もっともメリハリのある印象。
  //性格の強さ：Sine < Quad < Cubic < Quart < Quint < Expo
  easing : 'easeOutQuart',
  //ナビゲーションの形（"block" or "bubble"）
  navType : 'block',
  //子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  //ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  //スライドショーの自動再生（falseで自動再生なし）
  autoPlay : true,
  //自動再生時の錘ライド切り替え間隔（ミリ秒）
  autoPlayDuration : 5000,
  //キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  //1枚目のスライド表示時に戻る矢印を表示するかどうか[false]:矢印を隠さない[true]:矢印を隠す
  hidePrevious : false
});