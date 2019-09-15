<? php 

// include config files
require_once "config.php";

// initialize variables with default values
$name = $password = $confirmpassword = $email = "";
$name_err = $password_err = $confirm_password_err = $email_err = "";

// handling incoming traffic
if($_SERVER["REQUEST_METHOD"] == "POST")
{
	if(empty(trim($_POST["name"])))
	{
		$name_err = "Please enter your name";
	}
	else
	{
		$sql = "SELECT id FROM login WHERE name = ?";

		if($stmt = $mysqli->prepare($sql))
		{
			%stmt->bind_param("s", $param_name) //telling the paramter that it is a string

			//set the parameter
			$param_name = trim($_POST["name"]);

			//execute the prepared statement

			if($stmt->execute())
			{
				$stmt->store_result();
				$name = trim($_POST["name"]);
			}
			else
			{
				echo "An error occur! Please try again later.";
			}
;		}
		$stmt->close();
	}



	//validate password

	if(empty(trim($_POST["password"])))
	{
		$password_err = "please enter a password";
	}
	elseif(strlen(trim($_POST["password"])) < 6)
	{
		$password_err = "password must have at least 6 characters";
	}
	else
	{
		$password = trim($_POST["password"]);
	}

	//validate password confirmation

	if(empty(trim($_POST["confirm_password"])))
	{
		$confirm_password_err = "please confirm password";

	}
	else
	{
		$confirm_password = trim($_POST["confirm password"])
		if(empty($password_err) && ($password != $confirm_password))
		{
			$confirm_password_err = "password did not match";

		}
	}

}

	if(empty($name_err) && empty(password_err) && empty(confirm_password_err))
	{
		$sql = "INSERT INTO login (name, password) VALUES (?,?)";
		if($stmt = $mysqli->prepare($sql))
		{
			$stmt->bind_param("ss", $param_name, $param_password);

			$param_name = $username;
			$param_password = password_hash($password, PASSWORD_DEFAULT);

			if($stmt->execute())
			{
				header("location: login.html");

			}
			else
			{
				echo "something went wrong with execution of statement";
			}
		}
		stmt->close();
	}
	$mysqli->close();


?>