<?php
$conn = mysqli_connect("Localhost", "root", "", "user_information");
if($conn){
	echo 'Connection Successful';
	
	$email = $_POST['email'];
	$fname = $_POST['firstName'];
	$lname = $_POST['lastName'];
	$gender = $_POST['gender'];
	$dob = $_POST['date'];
	$contactNo = $_POST['contactNo'];	
	$password = $_POST['password'];
	$address = $_POST['address'];
	$new_date = date('Y-m-d', strtotime($dob));



	$isRegistered=mysqli_query($conn, "insert into user_info(First_Name,Last_Name,Gender,DOB,Address,Contact_No, Email_Id, Password) 
		values('$fname','$lname','$gender','$new_date','$address','$contactNo','$email','$password')");

	if($isRegistered)
		echo 'Registered Succesfully.';

	$mailContent = "Welcome \n\nYou have been successfully registered into the site.\n\n\n\nThanks,\nSonali";
	mail($email,"Registered Successfully",$mailContent);
	return true;
}
return false;
?>