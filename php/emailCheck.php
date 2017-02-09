<?php
$conn = mysqli_connect("Localhost", "root", "", "user_information");
if($conn){
	//echo 'Connection Successful\n';
	$emailId = $_GET['email'];
	//echo $emailId;
	$isAlreadyExist = mysqli_query($conn, "select First_Name from user_info where Email_Id = '$emailId'");
	$rows = mysqli_num_rows($isAlreadyExist);
	//echo $emailId;
	//echo $rows;
	if($rows>0){
		echo "\nThis email is already registered.";
		exit;
	}
}	
return false;
?>