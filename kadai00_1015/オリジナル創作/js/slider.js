// $('.slider').slick({
//     autoplay: true,//自動的に動き出すか。初期値はfalse。
//     autoplaySpeed: 6000,//次のスライドに切り替わる待ち時間
//     speed:1000,//スライドの動きのスピード。初期値は300。
//     infinite: true,//スライドをループさせるかどうか。初期値はtrue。
//     slidesToShow: 3,//スライドを画面に3枚見せる
//     slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
//     arrows: true,//左右の矢印あり
//     prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
//     nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
//     dots: true,//下部ドットナビゲーションの表示
//     pauseOnFocus: false,//フォーカスで一時停止を無効
//     pauseOnHover: false,//マウスホバーで一時停止を無効
//     pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
// });

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 1000,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});