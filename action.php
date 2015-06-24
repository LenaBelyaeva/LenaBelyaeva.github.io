<?php
header("Content-type: text/html; charset=windows-1251");



	$dbcon = mysql_connect("localhost", "root", ""); 
    mysql_select_db("myadmin", $dbcon);


    session_start();

    if (isset($_POST["request"])== 'in'){

			if (isset($_SESSION['authorized'])==1){
				echo 5;
				exit;
			}

			else{
				exit;
			}
	}

	if (isset($_POST["requestt"])=='out'){
		session_destroy();
		exit;
	}


	if((strlen($_POST['login']) != 0) && (strlen($_POST['pass']) != 0)){

		$login = @iconv("UTF-8", "windows-1251", $_POST['login']);
		$login = htmlspecialchars($login);
		
		$password = @iconv("UTF-8", "windows-1251", $_POST['pass']);
		$password = htmlspecialchars($password);

		$country = ($_POST['country']);

		$result = mysql_query("SELECT login FROM users WHERE login='$login'",$dbcon);
	    $myrow = mysql_fetch_array($result);
	    if (!empty($myrow["login"])) {
	    echo 0;
	    exit;
	    }

	    else{

	    $sql = mysql_query("INSERT INTO users (login,password,country) Values ('$login','$password','$country')", $dbcon);
		if ($sql){
			echo 1;
			exit;

		}


		if (!$sql){
			echo 2;
			exit;
		}
		}

	}

	else {
		$login = @iconv("UTF-8", "windows-1251", $_POST['slogin']);
		$login = addslashes($login);
		$login = htmlspecialchars($login);
		$login = stripslashes($login);
		
		$password = @iconv("UTF-8", "windows-1251", $_POST['spass']);
		$password = addslashes($password);
		$password = htmlspecialchars($password);
		$password = stripslashes($password);


		$result = mysql_query("SELECT login FROM users WHERE login='$login'",$dbcon);
	    $myrow = mysql_fetch_array($result);
	    if (empty($myrow["login"])) {
	    echo 3;
	    exit;
	    }
	    else{

	    $result = mysql_query("SELECT password FROM users WHERE login='$login'",$dbcon);
	    $myrow =  mysql_fetch_array($result);

	    if ($myrow["password"] == $password){
	    	$_SESSION['authorized'] = 1;
	    	$_SESSION['login'] = $login;
	    	echo 4;
	    	exit;
	    }

	    if ($myrow["password"] != $password){
	    	echo 3;
	    	exit;
	    }
		}


	}


?>