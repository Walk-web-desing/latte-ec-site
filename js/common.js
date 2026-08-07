//ハンバーガーメニュー
$(".ham").click(function () {
  $(".ham").toggleClass("is-show");
  $(".header-nav").toggleClass("is-show");
});
$(".header-nav a").click(function(){
  $(".ham").removeClass("is-show");
  $(".header-nav").removeClass("is-show");
});
// 検索窓
const searchBtn = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");
if (searchBtn && searchBox) {
  searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("show");
  });
}
//スクロールしたらでてくる
const fadeItems = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2,
});
fadeItems.forEach((item) => {
  observer.observe(item);
});
//topへ
const $topButton = $(".page-top");
$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if (scroll > 100) {
    $topButton.addClass("is-show");
  } else {
    $topButton.removeClass("is-show");
  }
});
// about-gallery(900px以下でスリック適応)
function aboutSlider() {
  if ($(window).width() <= 900) {
    if (!$(".about-gallery").hasClass("slick-initialized")) {
      $(".about-gallery").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 800,
        arrows: false,
        dots: true,
        dotsClass: "dots-wrap",
        fade: true,
      });
    }
  } else {
    if ($(".about-gallery").hasClass("slick-initialized")) {
      $(".about-gallery").slick("unslick");
    }
  }
}
aboutSlider();
$(window).on("resize", function () {
  aboutSlider();
});