function gotoLogin(){
	
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	var repass= document.getElementById('repassword')
	
	if(pass.value == repass.value)
	{
		
		window.open("index-3.html","_self");
		
	}
	
	else{
		
		window.alert("Please fill the correct details");
	}
	
	
}