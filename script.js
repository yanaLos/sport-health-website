
$(
    function () {
        $(window).scroll(
            function () {
                if ($(this).scrollTop() > 200) {
                    $(".fade").addClass("animated fadeInRight");
                } else {  
                    $(".fade").css('display:none');
                }
				
				if ($(this).scrollTop() > 600) {
                    $(".faderight").addClass("animated fadeInLeft");
                } else {  
                    $(".faderight").css('display:none');
                }
				
				if ($(this).scrollTop() > 1400) {
                    $(".zoom").addClass("animated zoomIn");
                } else {  
                    $(".zoom").css('display:none');
                }
				
				if ($(this).scrollTop() > 1600) {
                    $(".flip").addClass("fadeInRight");
                } else {  
                    $(".flip").css('display:none');
                }
            }	
        )

    }
	

)
      
        