var intervalID;
function toSlide(slide)
{
	while(slide > 4)
		slide -= 4;
	var multi = -90;
	var rot = multi * (slide-1);
	$('.slideshow .button').removeClass('active');
	$('.slideshow .button[toSlide="'+slide+'"]').addClass('active');
	$('.slides').css('transform', 'rotateX('+rot+'deg)').attr('slidenr', slide);
}
function toNextSlide()
{
	toSlide(Math.floor($('.slides').attr('slidenr')) + 1);
}
$('.slideshow .button').click(function(){
	toSlide($(this).attr('toSlide'));
	clearInterval(intervalID);
});
$(function() {
	intervalID = setInterval(toNextSlide, 5000);
});