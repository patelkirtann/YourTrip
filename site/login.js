function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}

function clicked(){
	
		var user = document.getElementById('username');
		var pass = document.getElementById('password');
		
		var first = getUrlVars()["username"];
		var second = getUrlVars()["password"];

		
		if(user.value == first && pass.value == second || user.value == 'kirtan' && pass.value == 'kirtan'){
			
			window.open("index.html","_self");
			
			
		}
		else{
			
			window.alert("Incorrect ID or Pass" );
		}
		
}