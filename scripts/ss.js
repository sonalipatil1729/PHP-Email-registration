function validateCredentials(){
	alert ("Sonali here");
	var userName = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	
	if ( userName == "" || password == "" ){
		alert ("Credentials are empty.");
		document.loginForm.userName.focus() ;
		return false;
	}	
	return true;
}