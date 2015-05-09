var slide1_spped = 0;

document.getElementById('go').onclick =function(){
	startMove = setInterval('slide1_go()',80);
}
function slide1_move(remove_p,create_p,addition_p){
	$('#slide1_text p').eq(remove_p).remove();
	slide1_value = parseInt($('#slide1_text p').eq(create_p).text());
	$('#slide1_text').append('<p id="e">' + (slide1_value + addition_p) + '</p>');
	slide1_spped = 0;
	$('#slide1_text').css('left',slide1_spped + 'px');
}

function slide1_go(){
	slide1_spped -= 2;
	$('#slide1_text').css('left',slide1_spped + 'px');
	if(slide1_spped < -30){
		slide1_move(0,1,1);
		clearInterval(startMove);
	}
}