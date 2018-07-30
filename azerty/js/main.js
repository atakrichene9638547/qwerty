function lol()
{
	var par=document.getElementById('para');
	if(par.style.fontWeight=='bold')
	{
		par.style.fontWeight='normal';
	}
	  else{
	  	par.style.fontWeight='bold';
	  }
}
function under()
{
	var par=document.getElementById("para");
	if(par.style.textDecoration=='underline')
	{
		par.style.textDecoration='normal';
	}
	  else{
	  	par.style.textDecoration='underline';
	  }
}
function bott()
{
	var par=document.getElementById("para");
	if(par.style.fontStyle=='italic')
	{
		par.style.fontStyle='normal';
	}
	  else{
	  	par.style.fontStyle='italic';
	  }
}
function font(){
	document.getElementById("para").style.fontFamily=document.getElementById("font").value;


}
function Size(){
	document.getElementById("para").style.fontSize=document.getElementById("ssize").value;


}