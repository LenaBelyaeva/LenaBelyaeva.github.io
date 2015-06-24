<?php
    if ($_POST) //Условие будет выполнено, если произведен POST-запрос к скрипту.
    {
	$login = trim($_POST['login']);
	$password = trim($_POST['pass']);
	$slogin = trim($_POST['slogin']);
	$spassword = trim($_POST['spass']);

     //Подключаемся к базе данных.
    $dbcon = mysql_connect("localhost", "root", ""); 
    mysql_select_db("myadmin", $dbcon);
	
	if ($login != ""){

	 // проверка на существование пользователя с таким же логином.
    $result = mysql_query("SELECT login FROM users WHERE login='$login'",$dbcon);
    $myrow = mysql_fetch_array($result);
    if (!empty($myrow["login"])) {
    exit ("<script language='Javascript' type='text/javascript'>
		<!--
		function reload(){location = \"index.html\"};
		setTimeout('reload()', 0);
		-->
		</script>");
    }
	    //Выполняем SQL-запрос записывающий данные пользователя в таблицу.
	    $sql = mysql_query("INSERT INTO users (login,password) Values ('$login','$password')", $dbcon);
		if ($sql)
		{
	//Выводим сообщение об успешной регистрации.	
		exit ("<script language='Javascript' type='text/javascript'>
		<!--
		alert ('Registration complete!');
		function reload(){location = \"index.html\"}; 
		setTimeout('reload()', 0);
		-->
		</script>");

		mysql_close($dbcon);//Закрываем соединение MySQL.
        }
       }
      }

    else{
    	$result = mysql_query("SELECT login FROM users WHERE login='$slogin'",$dbcon);
    	$myrow = mysql_fetch_array($result);
    	if (!empty($myrow["login"])) {
    	exit ("<script language='Javascript' type='text/javascript'>
			<!--
			function reload(){location = \"index.html\"};
			setTimeout('reload()', 0);
			-->
			</script>");
    	}

    	$login = $result
    	$password = mysql_query("SELECT password FROM users WHERE login='$login'",$dbcon);
    	
    		

    }
			  
if (($_POST && $error) || !$_POST)
{
}
?>