var btn = document.getElementById("btn")

document.getElementById("submit").onclick = function(){
	btn.style.background = document.getElementById("inputColor").value;
	btn.style.border = document.getElementById("inputBorder").value;
	btn.style.borderTop = document.getElementById("inputBorderT").value;
	btn.style.borderRight = document.getElementById("inputBorderR").value;
	btn.style.borderBottom = document.getElementById("inputBorderB").value;
	btn.style.borderLeft = document.getElementById("inputBorderL").value;
}


