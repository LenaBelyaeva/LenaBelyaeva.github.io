
var reg_b = document.getElementById('reg-b');
var cfb = document.getElementById('cfb');
var login_b = document.getElementById('login-b');
var your_login = document.getElementById('your-login');
var your_pass = document.getElementById('your-pass');
var your_slogin = document.getElementById('your-slogin');
var your_spass = document.getElementById('your-spass');
var your_ok = document.getElementById('your-ok');
var your_sel = document.getElementById('select-b');
var check_box = document.getElementById('check-b');
var radio_box = document.getElementById('radio-b');
var error_rule = document.getElementById('error-rule');
var error_pass = document.getElementById('error-pass');
var error_log = document.getElementById('error-log');
var error_pass2 = document.getElementById('error-pass-2');
var error_log2 = document.getElementById('error-log-2');
var check = document.getElementById('yes');
var ukraine = document.getElementById('ukraine');
var russia = document.getElementById('russia');
var usa = document.getElementById('usa');
var japan = document.getElementById('japan');
var error_sel = document.getElementById('error-sel');
var sign_up = document.getElementById('sign-up');
var img = document.getElementById('img');
var roof = document.getElementById('roof');
var play_b = document.getElementById('play');
var log_out = document.getElementById('log-out');
var cat = document.getElementById('cat');
var roof = document.getElementById('roof');
var cat_jump = document.getElementById('cat-jump');
var cat_stay = document.getElementById('cat-stay');



img.onclick = function mmain(){
	main();
}

function main(){
	if (img.main == "main") {
		return;
	}

	img.main = "main";
	test(222);
	reg_b.style.display = 'inline-block';
    login_b.style.display = 'inline-block';
    play_b.style.display = 'none';
    log_out.style.display = 'none';
    your_login.style.display = 'none';
    your_pass.style.display = 'none';
    your_sel.style.display = 'none';
    check_box.style.display = 'none';
    radio_box.style.display = 'none';
    your_slogin.style.display = 'none';
    your_spass.style.display = 'none';
    your_ok.style.display = 'none';
    error_pass2.style.display = 'none';
    error_log2.style.display = 'none';
    error_rule.style.display = 'none';
    your_login.value = '';
    your_pass.value = '';
    your_slogin.value = '';
    your_spass.value = '';
    your_sel.select = "";
	russia.style.display = 'none';
	ukraine.style.display = 'none';
	usa.style.display = 'none';
	japan.style.display = 'none';
	your_sel.value = "Ukraine"
	cat.style.left = '-100px';
	cat.style.display = 'none';
	roof.style.display = 'none';
	roof.style.height = 0;
	$('#far-clouds').spSpeed(1);
    $('#near-clouds').spSpeed(2);
    cat_stay.style.display = 'none';
    cat.style.display = "none";
    $('#cat').stop(true, true);
}

login_b.onclick = function sframe(){

	lg()
}

function lg(){
	test(290);
	reg_b.style.display = 'none';
    login_b.style.display = 'none';
    your_login.style.display = 'none';
    your_pass.style.display = 'none';
    your_sel.style.display = 'none';
    check_box.style.display = 'none';
    radio_box.style.display = 'none';
    your_slogin.style.display = 'inline-block';
    your_spass.style.display = 'inline-block';
    your_ok.style.display = 'inline-block';
    your_ok.value = "Sign up"
    img.main = "";
}

reg_b.onclick = function frame(){

	test(450);
	reg_b.style.display = 'none';
    login_b.style.display = 'none';
    your_login.style.display = 'inline-block';
    your_pass.style.display = 'inline-block';
    your_ok.style.display = 'inline-block';
    your_sel.style.display = 'inline-block';
    check_box.style.display = 'inline-block';
    radio_box.style.display = 'inline-block';
    img.main = "";
}

function test(value) {
	$('#centre-ff').animate({height: (value-25 +'px')});
	$('#cfb').animate({height: (value + 'px'), 'margin-top': ((-1)*value/2 +'px')});	
}

check_box.onclick = function(){
	if (check.checked == "")
	{	
		if (error_rule.style.display != 'inline-block')
		{
			error_rule.style.display = 'inline-block';
			h = parseInt( cfb.style.height, 10 );
			test(h + 30);
		}
	}
	else {
		if (error_rule.style.display != 'none')
		{
			error_rule.style.display = 'none';
			h = parseInt( cfb.style.height, 10 );
			test(h - 30);
		}

	}
}

your_login.onkeyup = function() {	

	var log = your_login.value;
	if (isvalid(log) === false)
	{	
		if (error_log2.style.display != 'inline-block')
		{
			error_log2.style.display = 'inline-block';
			h = parseInt( cfb.style.height, 10 );
			test(h + 34);
		}
	}
	else {
		if (error_log2.style.display != 'none')
		{
			error_log2.style.display = 'none';
			h = parseInt( cfb.style.height, 10 );
			test(h - 34);
		}

	}
};

your_pass.onkeyup = function() {	

	var log = your_pass.value;
	if (isvalid(log) === false)
	{	
		if (error_pass2.style.display != 'inline-block')
		{
			error_pass2.style.display = 'inline-block';
			h = parseInt( cfb.style.height, 10 );
			test(h + 34);
		}
	}
	else {
		if (error_pass2.style.display != 'none')
		{
			error_pass2.style.display = 'none';
			h = parseInt( cfb.style.height, 10 );
			test(h - 34);
		}

	}
};


function isvalid(str)
{
	var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_".split("");
	var other = ".-_".split("");
	var n = 0
	
	for (var x = 0; x < other.length-1; x++)
	{
		if (other[x] == str[0])
		{
			return false
		}
	}

	for (var i = 0; i<str.length; i++)
	{
		if (valid.indexOf(str[i]) == -1)
		{
			n++;
		}
	}


	if (str.length < 6){
		n++
	}

	if (n == 0)
	{
		return true
	}

	return false
}

your_ok.onclick = function() {

}

your_sel.onclick = function sel(){
	select()
}

function select(){
	if (your_sel.select == "selected")
	{
		return
	}
	your_sel.select = "selected"
	russia.style.display = 'inline-block'
	ukraine.style.display = 'inline-block'
	usa.style.display = 'inline-block'
	japan.style.display = 'inline-block'
	h = parseInt( cfb.style.height, 10 );
	test(h + 96);
}


ukraine.onclick = function ukrr(){
	ukr();
}

function ukr(){
	your_sel.select = "";
	russia.style.display = 'none';
	ukraine.style.display = 'none';
	usa.style.display = 'none';
	japan.style.display = 'none';
	your_sel.value = "Ukraine"
	h = parseInt( cfb.style.height, 10 );
	test(h - 96);
}


russia.onclick = function rus(){
	your_sel.select = "";
	russia.style.display = 'none';
	ukraine.style.display = 'none';
	usa.style.display = 'none';
	japan.style.display = 'none';
	your_sel.value = "Russia"
	h = parseInt( cfb.style.height, 10 );
	test(h - 96);
}


usa.onclick = function usaa(){
	your_sel.select = "";
	russia.style.display = 'none';
	ukraine.style.display = 'none';
	usa.style.display = 'none';
	japan.style.display = 'none';
	your_sel.value = "USA"
	h = parseInt( cfb.style.height, 10 );
	test(h - 96);
}

japan.onclick = function jan(){
	your_sel.select = "";
	russia.style.display = 'none';
	ukraine.style.display = 'none';
	usa.style.display = 'none';
	japan.style.display = 'none';
	your_sel.value = "Japan"
	h = parseInt( cfb.style.height, 10 );
	test(h - 96);
}





          $(document).ready(function() {
                $('#far-clouds').pan({fps: 30, speed: 1, dir: 'left', depth: 30});
                $('#near-clouds').pan({fps: 30, speed: 2, dir: 'left', depth: 70});
                
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


    
    $(function() {
    $("#your-ok").click(function(){

    	if (your_sel.select == "selected"){
    		ukr();
    	}

        var login = $("#your-login").val();
        var pass = $("#your-pass").val();   
        var country = $("#select-b").val();
        var slogin = $("#your-slogin").val();
        var spass = $("#your-spass").val();

        $.ajax({
            type: "POST",
            url: "action.php",
            data: {"login": login, "pass": pass, "country": country, "spass": spass, "slogin": slogin},
            cache: false,                       
            success: function(response){
                var messageResp = new Array('login is already taken','registration complete!','database error. try again.','wrong login or password');
                if(response == 4){
                	main();
                	$('#login-b').hide();
        			$('#reg-b').hide();
        			$('#play').show();
        			$('#log-out').show();
                	new_game();
                	img.main = "main";

                }
                var resultStat = messageResp[Number(response)];
                $("#your-login").val("");
                $("#your-pass").val("");
                if(response == 0){
                    
                }

                if(response == 1){

                    lg();
                }

                $("#resp").text(resultStat).show().delay(1500).fadeOut(800);

                if(response == 3){
                    $("#your-slogin").val("");
                    $("#your-spass").val("");
                }

            }
        });

        return false;
                
    });
    });



$(document).ready(function(){
	$.ajax({ 
    type: "POST", 
    url: "action.php", 
    data: {"request" : 'in' }, 
    success: function(response){


    	if(response == 5){
        		main();
        		$('#login-b').hide();
        		$('#reg-b').hide();
        		$('#play').show();
        		$('#log-out').show();       		
        		new_game();
        		img.main = "main";
        }

        else{
        	return;
        }
        }
    })
});


$('#log-out').click(function(){

	if (cat_stay.style.display=="none"){
		return;
	}

	$.ajax({ 
    type: "POST", 
    url: "action.php", 
    data: {"requestt" : 'out'}, 
    success: function(){
    		img.main = "";
    		main();
        }
    })
});


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


