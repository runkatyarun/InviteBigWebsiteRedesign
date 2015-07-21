jQuery(document).ready(function(){
	
	
	$('.back_to_top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	
	$('.bannerbtn').click(function () {
        var getid = $(this).attr('data-target');
        setTimeout(function(){ 
        $("html, body").animate({ scrollTop: $(getid).offset().top - 0}, 500);}, 
        100);
   });
	
		
});