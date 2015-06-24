
var cfb = document.getElementById('cfb');
var img = document.getElementById('img');
var roof = document.getElementById('roof');
var play_b = document.getElementById('play');
var log_out = document.getElementById('log-out');
var cat = document.getElementById('cat');
var roof = document.getElementById('roof');
var cat_jump = document.getElementById('cat-jump');
var cat_stay = document.getElementById('cat-stay');




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
		$('#roof').pan({fps: 30, speed: 13, dir: 'left', depth: 30});	
		$('#far-clouds').spSpeed(2);
        $('#near-clouds').spSpeed(3);
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

	var play_game = false

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

document.onclick = function meowmeow(){
	if (play_game == false){
		return;
	}

	if (jumping == true){
		return;
	}

	jumping = true;
	roof_jump();
    jump();
    setTimeout(run, 833);
    setTimeout(jumpin, 835);
}





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


setInterval(lol, 5000);

function roof_jump(){
	$('#roof').animate({bottom: '-50px'}, 416.5).animate({bottom: 0}, 416.5);
	$('#far-clouds').animate({top: '15px'}, 416.5).animate({top: 0}, 416.5);
	$('#near-clouds').animate({top: '15px'}, 416.5).animate({top: 0}, 416.5);
}


