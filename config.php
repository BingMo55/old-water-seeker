<? php 


/*credentials for accessing database*/
define('DB_SERVER', 'sql3.freemysqlhosting.net');
define('DB_USERNAME', 'sql3305120');
define('DB_PASSWORD', 'ESr8Fqfd4N');
define('DB_NAME','login');

/* attempting to connect to mySQL database*/
$link =  mysqli_connect(DB_SERVER, DB_USERNAME,DB_PASSWORD, DB_NAME);

if($link == false)
{
	die("ERROR: Could not connect. " . mysqli_connect_error());
}



?>