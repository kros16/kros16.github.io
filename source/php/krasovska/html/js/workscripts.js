$( document ).ready(function(){

  /* ===ФИКСИРОВАНОЕ МЕНЮ=== */
  $(window).scroll(function () {
      var height = $( "#header h1" ).height();
      if ($(this).scrollTop() > height) {
        $( "#top-menu" ).addClass( "top-menu-fixed" );
        $( "#content" ).css("marginTop", "77px");
      } else {
        $( "#top-menu" ).removeClass( "top-menu-fixed" );
        $( "#content" ).css("marginTop", "0");
      }
  });
  /* ===end Фиксированое меню=== */

  /* ===МЕНЮ ДЛЯ МОБИЛЬНЫХ=== */
  $( "#title-main, #top-menu-list" ).addClass( "hidden-xs" );
  $( "#title-mobile, .btn-show-menu" ).addClass( "visible-xs" ).show();

  $( ".btn-show-menu" ).click(function(){
    $( "#top-menu-list" ).toggleClass( "hidden-xs" );
  });
  /* ===end Меню для мобильных=== */

  /* ===КНОПКА НАВЕРХ=== */
  $( "#scroll-on-top" ).hide();
  $(window).scroll(function () {
      if ($( this ).scrollTop() > 0) {
          $( "#scroll-on-top" ).fadeIn();
      } else {
          $( "#scroll-on-top" ).fadeOut();
      }
  });
  $( "#scroll-on-top" ).click(function () {
    $( "body,html" ).animate({
        scrollTop: 0
    }, 400);
    return false;
  });
  /* ===end Кнопка наверх=== */

});
