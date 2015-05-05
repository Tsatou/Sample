var scroll1 = document.getElementById('scroll1');
var scroll1_text = document.getElementById('scroll1_text');
var scroll1_img = document.getElementById('scroll1_img');
var scroll1_img2 = document.getElementById('scroll1_img2');
var scroll1_img3 = document.getElementById('scroll1_img3');
var scroll1_img4 = document.getElementById('scroll1_img4');
var scroll_value = 0;
var scroll1_imgFlag= true,scroll1_img2Flag= false;
var play_scroll1 = false;

var scroll1_img3_left_value = 0,scroll1_img3_opacity = 0;
var scroll1_img4_rotate = 0,scroll1_img4_opacity = 0;

function scroll1_go(element1){
	scroll_value += 20;
	element1.style.transform = "rotateX(" + scroll_value+ "deg)" + "rotateY(" + -scroll_value+ "deg)";
	element1.style.left = (-scroll_value*2)+ "px";
}

function scroll1_return(element1,element2){
	element1.style.transform = "rotateX(" + 0 + "deg)" + "rotateY(" + 0 + "deg)";
	element1.style.left = "0px";
	element1.style.zIndex = "1";
	element2.style.zIndex = "2";
}

scroll1_text.onclick = function(){
	if(play_scroll1) return;
	play_scroll1 = true;
	clear_scroll1 = setInterval('start_scroll1()',100);
}


function start_scroll1(){
	if(scroll_value < 70){
		if(scroll1_imgFlag){
			scroll1_start = new scroll1_go(scroll1_img);
		}else{
			scroll1_start = new scroll1_go(scroll1_img2);
		}
	}else{
		if(scroll1_imgFlag){
			scroll1_start = new scroll1_return(scroll1_img,scroll1_img2);
			scroll1_imgFlag= false;
			scroll1_img2Flag= true;
		}else{
			scroll1_start = new scroll1_return(scroll1_img2,scroll1_img);
			scroll1_img2Flag= false;
			scroll1_imgFlag= true;
		}
		clearInterval(clear_scroll1);
		scroll_value= 0;
		play_scroll1 = false;
	}
}

scroll1.onscroll = function(){
	
	var value = scroll1.scrollTop;
	if(value > 60){
		if(scroll1_img3_left_value < 140){
		scroll1_img3_left_value += 12;
		scroll1_img3_opacity += 0.1;

		scroll1_img3.style.left = scroll1_img3_left_value + "px";
		scroll1_img3.style.opacity = scroll1_img3_opacity;
		}
	}else{
		scroll1_img3_left_value = 0;
		scroll1_img3_opacity =  0;
		scroll1_img3.style.left = "-200px";
	}

	if(value > 170){
		setInterval('img4_rotate()',100);
	}else{
		scroll1_img4_opacity = 0;
		scroll1_img4_rotate = 0;
	}
}

function img4_rotate(){
	if(scroll1_img4_rotate < 2160){
		scroll1_img4_rotate += 20;
		scroll1_img4_opacity += 0.01;
		scroll1_img4.style.transform =  "rotateZ(" + scroll1_img4_rotate + "deg)";
		scroll1_img4.style.opacity = scroll1_img4_opacity;
	}
}






