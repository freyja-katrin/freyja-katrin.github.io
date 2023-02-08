function my() {
	var ptext_field = document.getElementById("pfreq")
	pinput = ptext_field.value
	console.log("p: " + pinput)
	var qtext_field = document.getElementById("qfreq")
	qinput = qtext_field.value
	console.log("q: " + qinput)
	
	var x = document.getElementById("homoD")
	var homoD = pinput * pinput
	x.innerHTML = homoD
	
	var y = document.getElementById("heteroD")
	var heteroD = pinput * qinput * 2
	y.innerHTML = heteroD
	
	var z = document.getElementById("homoR")
	var homoR = qinput * qinput
	z.innerHTML = homoR

	var popSize = document.getElementById("popSize").value
	var homoDNum = homoD * popSize
	document.getElementById("t1").innerHTML = homoDNum
	var heteroDNum = heteroD * popSize
	document.getElementById("t2").innerHTML = heteroDNum
	var homoRNum = homoR * popSize
	document.getElementById("t3").innerHTML = homoRNum

	/*
	get element then use element i found and place it then put .text(variable)
	*/
}

function sample(){

}

var d = document.getElementById("run")
d.addEventListener("click", my)

var s = document.getElementById("sample")
s.addEventListener("click", )
