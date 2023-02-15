var homoD, homorR, heteroD, popSize, homoDNum, heteroDNum, homoRNum
const offspring = new Array()
const copy = new Array()

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

	popSize = document.getElementById("popSize").value

	homoDNum = 0
	heteroDNum = 0
	homoRNum = 0

	assignOffspring()
	
	
	document.getElementById("t1").innerHTML = homoDNum
	document.getElementById("t2").innerHTML = heteroDNum
	document.getElementById("t3").innerHTML = homoRNum
	
	/*
	get element then use element i found and place it then put .text(variable)
	*/
}

function sampleWithReplacement(){
	var rand = Math.floor((Math.random() * offspring.length))
	document.getElementById("result").innerHTML = offspring[rand]
}

function assign(){
	var rand = Math.random() * 100 + 1

	if(rand < (homoD * 100)){
		homoDNum++
		console.log(homoDNum)
		return "AA"
	} else if(rand < (homoD* 100 + heteroD * 100)){
		heteroDNum++
		console.log(heteroDNum)
		return "Aa"
	} else {
		homoRNum++
		console.log(homoRNum)
		return "aa"
	}
}

function sampleNoReplacement(){
	var rand = Math.floor((Math.random() * copy.length))
	document.getElementById("result").innerHTML = copy[rand]
	copy.splice(rand, rand + 1)
		
}

function assignOffspring(){
	for(let i = 0; i < popSize; i++){
		console.log("pass")
		offspring[i] = assign()
	}
	
	for(let i = 0; i < offspring.length; i++){
		copy[i] = offspring[i]
	}
}

var d = document.getElementById("run")
d.addEventListener("click", my)

var s = document.getElementById("sample")
s.addEventListener("click", sampleWithReplacement)

var r = document.getElementById("noReplacement")
r.addEventListener("click", sampleNoReplacement)
