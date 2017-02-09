<?php
$conn = mysqli_connect("Localhost", "root", "", "user_information");
if($conn){
	$userName = $_GET['userName'];
	$password = $_GET['password'];
	if(empty($userName)||empty($password)){
		echo $userName;
		echo $password;
		echo "Username or Password is invalid";
		return false;
	}

	else{
		$result = mysqli_query($conn, "select Email_Id from user_info where Email_Id = '$userName' and password='$password'");
		$rowNum = mysqli_num_rows($result);
		if($rowNum == 1)
		{
			$_SESSION['login_user']	= $userName;
			echo "Login Successful";
			header("Location: profile.html"); /* Redirect browser */
			exit();
		}
		else
		{
			echo "\nWrong Credentials! Please try again.";
			exit();
		}
	}

}
return false;
?>
