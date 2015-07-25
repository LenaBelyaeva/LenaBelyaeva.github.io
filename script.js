
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



function test(value) {
	$('#centre-ff').animate({height: (value-25 +'px')});
	$('#cfb').animate({height: (value + 'px'), 'margin-top': ((-1)*value/2 +'px')});	
}


          $(document).ready(function() {
                $('#far-clouds').pan({fps: 30, speed: 1, dir: 'left', depth: 30});
                $('#near-clouds').pan({fps: 30, speed: 2, dir: 'left', depth: 70});
                show_objects();
                
                window.actions = {
                    speedyClouds: function(){
                        $('#far-clouds').spSpeed(12);
                        $('#near-clouds').spSpeed(20);
                    },
                    runningClouds: function(){
                        $('#far-clouds').spSpeed(8);
                        $('#near-clouds').spSpeed(12);
                    },
                    walkingClouds: function(){
                        $('#far-clouds').spSpeed(3);
                        $('#near-clouds').spSpeed(5);
                    },
                    lazyClouds: function(){
                        $('#far-clouds').spSpeed(0.7);
                        $('#near-clouds').spSpeed(1);
                    },
                    stop: function(){
                        $('#far-clouds, #near-clouds').spStop();
                    },
                    start: function(){
                        $('#far-clouds, #near-clouds').spStart();
                    },
                    toggle: function(){
                        $('#far-clouds, #near-clouds').spToggle();
                    },
                    left: function(){
                        $('#far-clouds, #near-clouds').spChangeDir('left');                    
                    },
                    right: function(){
                        $('#far-clouds, #near-clouds').spChangeDir('right');                    
                    }
                };
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

	}


    

$('#cat').sprite({fps: 12, no_of_frames: 2});

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


/*questions*/
var ls1 = ["0", "56-49-6=?", "6/3=?", "36/12=?", "112/28=?", "15/3=?", "sqrt(36)=?", "42/6=?", "72/9=?", "108/12=?"];
var ls2 = ["0", "21/(3*7)=?", "1+1=?", "6/2=?", "sqrt(16)=?", "25/5=?", "72/12=?", "35/5=?", "40-32=?", "73-64=?"];

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
	hui = roof.style.backgroundPositionX;
	//$('#task').text(parseInt(hui)<= -970);

	if (  parseInt(hui)<= -1680)	{ generate_quest(); }
	if (((parseInt(hui)<= -1076)&&(parseInt(hui)>= -1210))&&(cat.style.display!= 'none' )){
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
		$('#roof').animate({backgroundPositionX: '0px'},3000);
		setTimeout(new_game,3000)
		$('#far-clouds').spSpeed(1);
        $('#near-clouds').spSpeed(2);

		}
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