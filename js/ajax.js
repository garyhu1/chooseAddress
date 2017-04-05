function ajax(method,url,success,fail,data) {
	var request;
	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
	}else{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	request.onreadystatechange = function() {
		if(request.readyState == 4){
			if(request.status == 200){
				success(request.responseText);
			}else{
				fail("Error Code : "+request.status);
			}
		}
	}
	
	data = data?data:"";
	if(method.toUpperCase() == "GET"){
		request.open(method,url+"?"+data,true);
		request.send();
	}else{
		request.open(method,url,true);
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		request.send();
	}
}
