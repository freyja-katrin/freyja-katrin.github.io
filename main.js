var homoD, homorR, heteroD, popSize
const offspring = new Array()

function my() {
	var ptext_field = document.getElementById("pfreq")
	pinput = ptext_field.value
	console.log("p: " + pinput)
	qtext_field = document.getElementById("qfreq")
	qinput = qtext_field.value
	console.log("q: " + qinput)
	
	var x = document.getElementById("homoD")
	homoD = pinput * pinput 
	x.innerHTML = 100 * Math.round((homoD + Number.EPSILON)*1000) / 1000
	
	var y = document.getElementById("heteroD")
	heteroD = pinput * qinput * 2 
	y.innerHTML = 100 * Math.round((heteroD + Number.EPSILON)*1000) / 1000
	
	var z = document.getElementById("homoR")
	homoR = qinput * qinput 
	z.innerHTML = 100 * Math.round((homoR + Number.EPSILON)*1000) / 1000

	/*var popSize = document.getElementById("popSize").value
	var homoDNum = homoD * popSize
	document.getElementById("t1").innerHTML = homoDNum
	var heteroDNum = heteroD * popSize
	document.getElementById("t2").innerHTML = heteroDNum
	var homoRNum = homoR * popSize
	document.getElementById("t3").innerHTML = homoRNum
	*/
	/*
	get element then use element i found and place it then put .text(variable)
	*/
}

function sample(){
	document.getElementById("result").innerHTML = assign()
}

function assign(){
	var rand = Math.random() * 100 + 1

	if(rand < (homoD * 100)){
		return "AA"
	} else if(rand < (homoD* 100 + heteroD * 100)){
		return "Aa"
	} else {
		return "aa"
	}
}

function sampleNoReplacement(){
	var rand = Math.random() * popSize
	if(offspring[rand] != null){
		document.getElementById("result").innerHTML = offspring[rand]
		offspring[rand] != null
	} else{
		document.getElementById("result").innerHTML = "no"
	}
		
}

function assignOffspring(){
	for(let i = 0; i < popSize; i++){
		offspring[i] = assign
	}
}

var d = document.getElementById("run")
d.addEventListener("click", my)

var s = document.getElementById("sample")
s.addEventListener("click", sample)

var r = document.getElementById("noReplacement")
r.addEventListener("click", sampleNoReplacement)
