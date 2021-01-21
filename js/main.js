$(document).ready(function () {
  $(".slider").slick({
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".accordion__title").on("click", function () {
    if ($(this).parent().hasClass("accordion__item--active")) {
      $(this).parent().removeClass("accordion__item--active");
    } else {
      $(".accordion__item").removeClass("accordion__item--active");
      $(this).parent().addClass("accordion__item--active");
    }
  });

  let block = $("#sidebar"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)

  $(".burger").click(function () {
    block.addClass("active");
  });

  $(document).mouseup(function (e) {
    // отслеживаем событие клика по веб-документу

    if (
      !block.is(e.target) && // проверка условия если клик был не по нашему блоку
      block.has(e.target).length === 0
    ) {
      // проверка условия если клик не по его дочерним элементам
      block.removeClass("active"); // если условия выполняются - скрываем наш элемент
    }
  });

  $(".default-option").click(function () {
    $(this).parent().toggleClass("active");
  });

  $(".select-ul li").click(function () {
    let currentelem = $(this).html();
    $(".default-option li").html(currentelem);
    $(this).parents(".select_wrap").removeClass("active");
  });

  $(".tab").click(function () {
    if ($(window).width() > 760) {
      $(".tab-item").removeClass("active");
      $(this).parent().addClass("active");
    }
  });

  $(".tab-2").click(function () {
    if ($(window).width() > 760) {
      $(".tab-item-2").removeClass("active");
      $(this).parent().addClass("active");
    }
  });

  $(".tabs__base-item").click(function () {
    $(".tabs__base-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".tabs__base-item-3").click(function () {
    $(".tabs__base-item-3").removeClass("active");
    $(this).addClass("active");
  });

  $(".tabs__little-item-3").click(function () {
    $(".tabs__little-item-3").removeClass("active");
    $(this).addClass("active");
  });

  $(".tabs__little-item").click(function () {
    $(".tabs__little-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".prompt-span-1").hover(function () {
    $(".prompt__hint-1").addClass("active");
    $(".prompt-span-1").addClass("active");
  });

  $(".prompt-span-1").mouseleave(function () {
    $(".prompt__hint-1").removeClass("active");
    $(".prompt-span-1").removeClass("active");
  });

  $(".prompt-span-2").hover(function () {
    $(".prompt__hint-2").addClass("active");
    $(".prompt-span-2").addClass("active");
  });

  $(".prompt-span-2").mouseleave(function () {
    $(".prompt__hint-2").removeClass("active");
    $(".prompt-span-2").removeClass("active");
  });

  $(".dots__item").click(function () {
    $(".dots__item").removeClass("active");
    $(this).addClass("active");
  });

  $(".form__left-input").focus(function () {
    $(".form__left-input").removeClass("active");
    $(this).parent().addClass("active");
  });

  $(".form-item").focus(function () {
    $(this).parent().addClass("questions__form-item_active");
  });

  $(".form-item").blur(function () {
    $(this).parent().removeClass("questions__form-item_active");
  });

  $(".form__left-input").focus(function () {
    $(this).parent().addClass("form__left-input_active");
  });

  $(".form__left-input").blur(function () {
    $(this).parent().removeClass("form__left-input_active");
  });

  $(".first-tab-js").click(function () {
    if ($(window).width() < 761) {
      $(this).toggleClass("close-select");
      $(".tab-ul-js").toggleClass("tab-ul--active");
    }
  });

  $(".tab-js").on("click", function () {
    if ($(window).width() < 761) {
      // console.log($(this).text());
      $(".first-tab-js").text($(this).text());
      $(".tab-ul").removeClass("tab-ul--active");
      $(".first-tab").removeClass("close-select");
    }
  });


  // second tabs
  $(".first-tab-js-2").click(function () {
    if ($(window).width() < 761) {
      $(this).toggleClass("close-select");
      $(".tab-ul-js-2").toggleClass("tab-ul--active");
    }
  });

  $(".tab-js-2").on("click", function () {
    if ($(window).width() < 761) {
      // console.log($(this).text());
      $(".first-tab-js-2").text($(this).text());
      $(".tab-ul-js-2").removeClass("tab-ul--active");
      $(".first-tab-js-2").removeClass("close-select");
    }
  });

  $(".tab-js-3").on("click", function () {
    if ($(window).width() < 761) {
      // console.log($(this).text());
      $(".first-tab-js-3").text($(this).text());
      $(".tab-ul-js-3").removeClass("tab-ul--active");
      $(".first-tab-js-3").removeClass("close-select");
    }
  });

  $(".tab-js-4").on("click", function () {
    if ($(window).width() < 761) {
      // console.log($(this).text());
      $(".first-tab-js-4").text($(this).text());
      $(".tab-ul-js-4").removeClass("tab-ul--active");
      $(".first-tab-js-4").removeClass("close-select");
    }
  });
});
