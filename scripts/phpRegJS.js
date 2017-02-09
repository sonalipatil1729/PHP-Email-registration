function validateCredentials(){
	var userName = document.getElementById("userName").value;
	var password = document.getElementById("password").value;

	if (userName ===""){
		document.getElementById("uNameError").style.visibility = "visible";
		document.getElementById("uNameError").innerHTML="User Name is empty";
		document.lo
		gin.userName.focus() ;
		return false;
	}
	if (password ===""){
		document.getElementById("pwdError").style.visibility = "visible";
		document.getElementById("pwdError").innerHTML="Password is empty";
		document.login.password.focus() ;
		return false;
	}   
	return true;
}

function removeError(){
	document.getElementById("uNameError").style.visibility = "hidden";
	document.getElementById("pwdError").style.visibility = "hidden";
	return true;
}
//ajax call to check if the email id is registered already
function checkemail()
{

	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			document.getElementById("emailError").innerHTML = xmlhttp.responseText;

		}
	}

	var emailId = document.getElementById("email").value;
	xmlhttp.open("GET","emailCheck.php?email="+emailId,true);
	xmlhttp.send();

	return true;
}


function validate(){
	//checkemail();
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var dateValue = document.getElementById("date").value;
	var password = document.getElementById("password").value;
	var passwordCnf = document.getElementById("passwordCnf").value;
	var gender = document.getElementsByName("gender");
	var contactNo = document.getElementById("contactNo").value;
	var email = document.getElementById("email").value;
	var genValue = false;


	if ( firstName == "" ){
		alert ("First Name is Mandatory.");
		document.loginForm.firstName.focus	() ;
		return false;
	}	

	if ( lastName == "" ){
		alert ("Last Name is Mandatory.");
		document.loginForm.lastName.focus() ;
		return false;
	}

	for(var i=0; i<gender.length;i++){
		if(gender[i].checked == true){
			genValue = true;  
			break;  
		}
	}
	if(!genValue){
		alert("Please Choose the gender");
		document.loginForm.gender.focus() ;
		return false;
	}
	if ( dateValue == "" ){
		alert ("Date is not complete.");
		document.loginForm.date.focus() ;
		return false;
	}

	if ( contactNo == "" ){
		alert ("contact Number is Mandatory.");
		document.loginForm.contactNo.focus() ;
		return false;
	}
	var re =/^[1-9]*-\d{3}-\d{4}$/;
	if(!re.test(contactNo)){
		alert ("ContactNo is not correct.");
		document.getElementById("contactNo").value = "";
		document.loginForm.contactNo.focus() ;
		return false;
	}
	if ( email == "" ){
		alert ("Email Id is Mandatory.");
		document.loginForm.email.focus() ;
		return false;
	}
	var re1 =/^\S+@\S+\.\S+$/;
	if(!re1.test(email)){
		alert ("Email Id is not correct.");
		document.getElementById("email").value = "";
		document.loginForm.email.focus() ;
		return false;
	}
	if ( password == "" ){
		alert ("Password is Mandatory.");
		document.loginForm.password.focus() ;
		return false;
	}
	if ( passwordCnf == "" ){
		alert ("Confirm password field is Mandatory.");
		document.loginForm.passwordCnf.focus() ;
		return false;
	}

	if ( passwordCnf != password){
		alert ("Both the password values does not match ");
		document.getElementById("password").value = "";
		document.getElementById("passwordCnf").value = "";
		document.loginForm.password.focus() ;
		return false;
	}
	if (password.includes(firstName) || password.includes(lastName)){
		alert ("Password cnnot contain FirstName of lastName");
		document.getElementById("password").value = "";
		document.loginForm.password.focus() ;
		return false;
	}

	var re2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

	if ( !re2.test(password)){
		alert ("Password does not satisfy the minimum requirements. It should have\n Atleast 1 capital letter, 1 digit and 1 special character");
		document.getElementById("password").value = "";
		document.loginForm.password.focus() ;
		return false;
	}


	return true;
}