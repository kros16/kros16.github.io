$( document ).ready(function(){

	// fancybox
    $(".fancybox").fancybox({		padding:[72,0,0,0],		wrapCSS:'fancy-header',
        maxWidth : 1264,		width : '100%',		//maxHeight: 800,				//autoHeight : true,		//fitToView: false,
        //height : '100%'						//fitToView: false,				
    });

    // accordion menu
    var animateTime = 500;

    $( ".cms-header" ).click(function(){

        $( ".projects-box" ).each(function(){
            $( this ).slideUp( animateTime );
            $( this ).prev().find( "i.fa-chevron-right" ).removeClass('rotate');
            $( this ).prev().css('background', '#fff');
        });

        var o = $( this ).parent().children( ".projects-box" );
        if( $( o ).is( ':hidden' ) ){
            $( o ).slideDown( animateTime );
            $( this ).find( "i.fa-chevron-right" ).addClass('rotate');
            $( this ).css('background', '#f5f5f5');
            $('html, body').animate({
                    scrollTop: $( this ).parent().parent().offset().top
            }, animateTime);
            // $( this ).scrollIntoView()
        }
        return false;
    });

    // skype status
  //   var login = "v.o.krasovsky";
  //   $.ajax({
  //   	url: "http://kros.96.lt/skypestatus.php",
  //   	method: "GET",
  //   	data: { slogin : login },
  //   	success: function( res ){
		// 	$( ".fa-skype" ).css('color', res);
		// },
		// error: function(){
		// 	return false;
		// }
  //   });


});