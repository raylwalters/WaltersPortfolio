function setActive(){
	page = document.getElementById("main-nav").getElementsByTagName("a");
	for(i=0; i<page.length; i++){
		if(document.location.href.indexOf(page[i].href)>=0){
			page[i].className="active";
		}
	}
}
window.onload = setActive;

function dropFunction(){
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e){
	if(!e.target.matches(".dropbtn")){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for(var d = 0; d<dropdowns.length; d++){
			var openDropdown = dropdowns[d];
			if(openDropdown.classList.contains("show")){
				openDropdown.classList.remove("show");
			}
		}
	}
}


function upCase(){
	var message = document.getElementById("message");
	var text = message.value;
	document.getElementById("message").value = (text.toUpperCase() + ", Your text is now capitalized!");

}
