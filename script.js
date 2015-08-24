
var cfb = document.getElementById('cfb');
var img = document.getElementById('img');
var roof = document.getElementById('roof');
var play_b = document.getElementById('play');
var log_out = document.getElementById('log-out');
var cat = document.getElementById('cat');
var roof = document.getElementById('roof');
var cat_jump = document.getElementById('cat-jump');
var cat_stay = document.getElementById('cat-stay');
var task = document.getElementById('task');
var result = document.getElementById('result');

function test(value) {
	$('#centre-ff').animate({height: (value-25 +'px')});
	$('#cfb').animate({height: (value + 'px'), 'margin-top': ((-1)*value/2 +'px')});	
}


$(document).ready(function() {

	$('#far-clouds').pan({fps: 30, speed: 1, dir: 'left', depth: 30});
    $('#near-clouds').pan({fps: 30, speed: 2, dir: 'left', depth: 70});
    show_objects();
    $('#cat').sprite({fps: 12, no_of_frames: 2});
    play_b.onclick = function(){

	if (cat_stay.style.display=="none"){
		return;
	}
		$('#cfb').hide(50);
		hello_cat();
		goo();
		setTimeout(what, 950);
		clearInterval(IDeyes);
		IDquest = setInterval(testt,50);
		$('#task').show();
		$('#result').text(0)

		IDone = setTimeout(one, 20000);

	}


});


	function goo(){
		$('#roof').pan({fps: 37, speed: 15, dir: 'left', depth: 30});	
		$('#far-clouds').spSpeed(4);
        $('#near-clouds').spSpeed(7);
	}

	function run_cat(){
		$('#cat').show().animate({left: '200px'},1000)
	}

	function hello_cat(){
		$('#cat-stay').hide();
		$('#cat').show();
		$('#cat').spStart();
	}

	function bye_cat(){
		$('#cat').hide();
		$('#cat-stay').show();
		$('#cat').spStop(true);
		play_b.disabled = false;
	}



	function show_objects(){
       	$('#roof').animate({height: '162px'},500);
       	setTimeout(run_cat, 500);
		setTimeout(bye_cat, 1500);
    }


	function new_game(){
        roof.style.display = 'inline-block';
        show_objects();
	}

	var play_game = false;

	function what(){
		play_game = true;
	}

	

                
function run(){
    $('#cat-jump').hide();
    $('#cat').show();
    $('#cat-jump').destroy();
    $('#cat').spStart();
}


function jump(){
    $('#cat-jump').show();
    $('#cat').hide();
    $('#cat').spStop(true);
    $('#cat-jump').sprite({fps: 12, no_of_frames: 9});

}
var jumping = false;

function jumpin(){
	jumping = false;
}

function meowmeow(){
	if (play_game == false){
		return;
	}

	if (jumping == true){
		return;
	}

	jumping = true;
	//roof_jump();
    jump();
    setTimeout(run, 833);
    setTimeout(jumpin, 835);
}
var x = 52;
$(document).ready(function() {
     $("body").keypress(function(e) {
          if (e.which == x) {
              meowmeow();
          }
     });
});




function open_eyes(){
	cat_stay.style.backgroundPosition = "left";

}

function close_eyes(){
	cat_stay.style.backgroundPosition = '180px';
}


function blinkk(){
	close_eyes();
	setTimeout(open_eyes, 150);

}


function double_blink(){
	close_eyes();
	setTimeout(open_eyes, 150);
	setTimeout(close_eyes, 200);
	setTimeout(open_eyes, 350);
}


function lol(){
	var random = Math.random();
	if (random < 0.5){
		blinkk();
	}
	else{
		double_blink();
	}
}


var IDeyes = setInterval(lol, 5000);

function roof_jump(){
	$('#roof').animate({bottom: '-50px'}, 416.5).animate({bottom: 0}, 416.5);
	$('#near-clouds').animate({top: '20px'}, 416.5).animate({top: 0}, 416.5);
}



var ls1 = ["0", "2-1=?", "6/3=?", "12/4=?", "2*2=?", "15/3=?", "36/6=?", "42/6=?", "56/7=?", "12-3=?"];
var ls2 = ["0", "1*1*1=?", "1+1=?", "1+1+1=?", "2*1+1*2=?", "25/5=?", "2+2+2=?", "35/5=?", "40-32=?", "3*3=?"];




function generate_quest(){
	var random = Math.random();
	var num = Math.floor(Math.random() * 9) + 1;
	if (random < 0.5){
		$('#task').text(ls1[num]);
	}
	else{
		$('#task').text(ls2[num]);
	}
	x = num+48;
};


function testt() {
	//result//
	var res = parseInt($('#result').text(), 10);
	res += 1;
	$('#result').text(res);
	//result//

	hui = roof.style.backgroundPositionX;

	if (  parseInt(hui,10)<= -1680)	{ 
		generate_quest(); 
		
	}
	if (((parseInt(hui,10)<= -1076)&&(parseInt(hui,10)>= -1210))&&(cat.style.display!= 'none' )){
		clearInterval(IDquest);
		task.style.display = 'none';
		$('#cat-jump').hide();
		$('#cat').hide();
		$('#cat-stay').show();
		play_b.disabled = true;
		play_game = false;
		$('#cat-stay').animate({bottom: '-87px'},416.5);
		$('#roof').destroy();
		$('#cfb').show(50);
		$('#roof').animate({backgroundPositionX: '0px'},1500);
		setTimeout(new_game,1500);
		$('#far-clouds').spSpeed(1);
        $('#near-clouds').spSpeed(2);
        var IDeyes = setInterval(lol, 5000);
       	var best = parseInt($('#best').text(), 10);
        if (res > best) {
        	$('#best').text(res);
        }

        ls1 = ["0", "2-1=?", "6/3=?", "12/4=?", "2*2=?", "15/3=?", "36/6=?", "42/6=?", "56/7=?", "12-3=?"];
		ls2 = ["0", "1*1*1=?", "1+1=?", "1+1+1=?", "2*1+1*2=?", "25/5=?", "2+2+2=?", "35/5=?", "40-32=?", "3*3=?"];

		clearTimeout(IDone);
		clearTimeout(IDtwo);
		clearTimeout(IDthree);
		clearTimeout(IDfour);

        };
}




function new_game(){
	cat_jump.style.display = 'none';
	cat.style.left = '-100px';
	cat.style.display = 'none';
	cat_stay.style.display = 'none';
	cat_stay.style.bottom = '160px';
	cat_stay.style.left = '200px';
	show_objects();
}




//speed
function one(){
    $('#roof').spSpeed(16);
	$('#roof').fps(40);
	ls1 = ["0", "75-74=?", "2+5*0=?", "36/12=?", "12/3=?", "60/12=?", "1*2*3=?", "28/4=?", "72/9=?", "81-72=?"];
	ls2 = ["0", "21/(3*7)=?", "15*0+2=?", "24/8=?", "36/9=?", "125/25=?", "48-42=?", "1*7*1=?", "5*2-2=?", "3+3+3=?"];
	IDtwo = setTimeout(two, 30000);

};
function two(){
 	ls1 = ["0", "48/(6*8)=?", "34/17=?", "9-2*3=?", "84/21=?", "1+3+1=?", "48/8=?", "10-1-2=?", "2*3+2=?", "72-64=?"];
 	ls2 = ["0", "9*7/63=?", "56/28=?", "2*1+1=?", "112/28=?", "70/7/2=?", "54-48=?", "56/8=?", "2+2*2+2=?", "81/9=?"];
	IDthree = setTimeout(three, 40000);

};
function three(){
    $('#roof').spSpeed(17);
    $('#far-clouds').spSpeed(4);
    $('#near-clouds').spSpeed(8);
    $('#roof').fps(42);
    ls1 = ["0", "56-54-1=?", "94/47=?", "42/14", "96/24=?", "7-5+3=?", "72/12=?", "84/12=?", "64/4/2=?", "108/12=?"];
    ls2 = ["0", "72/(12*6)=?", "78/39=?", "48/16=?", "11-6-1=?", "65/13=?", "1*3+3*1=?", "91/13=?", "72-64=?", "10-8+7=?"];
	IDfour = setTimeout(four, 70000);

};
function four(){
	$('#roof').spSpeed(18);
    $('#roof').fps(45);
    $('#far-clouds').spSpeed(5);
    $('#near-clouds').spSpeed(9);
    $('#roof').fps(41);
};
