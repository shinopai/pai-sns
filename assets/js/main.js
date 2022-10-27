$(function () {
  // faq
  $(".faq__item-lower").hide();

  $(".faq__item-upper").click(function () {
    if ($(this).next().css("display") == "none") {
      $(this).next().slideToggle();
      $(this).find("span:eq(1)").hide();
      $(this).find("span:eq(2)").fadeIn();
    } else {
      $(this).next().slideToggle();
      $(this).find("span:eq(1)").fadeIn();
      $(this).find("span:eq(2)").hide();
    }
  });

  // slider
  $(".client__lower-slide").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 0, //隣あう画像のスライドするまでの間隔時間
    speed: 10000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // topへ戻るボタン
  var topBtn = $(".back-top-btn");
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スルスルっとスクロールでトップへもどる
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
