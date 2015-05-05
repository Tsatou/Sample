$(function(){

	$menu8_li = $('#menu8 li');
	$menu8 = $('#menu8');

	$menu11_btn = $('#menu11_btn');
	$menu11_li = $('#menu11_li');

	function menu8_back_color(){
		$menu8.css('background','white');
	}
		
	$menu8_li.hover(function(){
		if($(this).text() == $menu8_li.eq(0).text()){
			$menu8.css('background',"#E0FFFF");
		}else if($(this).text() == $menu8_li.eq(1).text()){
			$menu8.css('background',"#F0FFF0");
		}else{
			$menu8.css('background',"#FFF8DC");
		}

		$(this).css('background','white');
	    $(this).css('box-shadow','0 0 8px 0 rgba(0, 0, 0, .3)');
	},
	function(){
		menu8_back_color();
		$(this).css('background','none');
	    $(this).css('box-shadow','none');
	});

	$menu11_btn.click(function(){
		$menu11_li.css('display','block');
		$menu11_li.animate({top: '-10px',opacity: 0.7}, 700);
		$menu11_btn.css('display','none');
	});
	$('#menu11_li p').click(function(){
		$menu11_li.animate({top: '-200px',opacity:0}, 700,function(){
			$menu11_li.css('display','none');
		});
		$menu11_btn.css('display','block');
	});

});