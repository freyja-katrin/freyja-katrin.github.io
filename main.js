var homoD, homorR, heteroD, popSize, homoDNum, heteroDNum, homoRNum, repSampleNum, noRepSampleNum, x, y, z
var genNum = 0;
const offspring = new Array()
const copy = new Array()

function my() {
	var ptext_field = document.getElementById("pfreq")
	const pinput = ptext_field.value
	console.log("p: " + pinput)
	var qtext_field = document.getElementById("qfreq")
	const qinput = qtext_field.value
	console.log("q: " + qinput)
	
	genNum += 1;
	document.getElementById("genNum").innerHTML = "generation #" + genNum
	document.getElementById("pVal").innerHTML = "p value: " + pinput
	document.getElementById("qVal").innerHTML = "q value: " + qinput
	
	genNum += 1;
	document.getElementById("genNum").innerHTML = "generation #" + genNum
	document.getElementById("pVal").innerHTML = "p value: " + pinput
	document.getElementById("qVal").innerHTML = "q value: " + qinput
	
	x = document.getElementById("homoD")
	homoD = pinput * pinput 
	x.innerHTML = 100 * Math.round((homoD + Number.EPSILON)*1000) / 1000

	y = document.getElementById("heteroD")
	heteroD = pinput * qinput * 2 
	y.innerHTML = 100 * Math.round((heteroD + Number.EPSILON)*1000) / 1000
	
	z = document.getElementById("homoR")
	homoR = qinput * qinput 
	z.innerHTML = 100 * Math.round((homoR + Number.EPSILON)*1000) / 1000

	popSize = document.getElementById("popSize").value

	homoDNum = 0
	heteroDNum = 0
	homoRNum = 0
	noRepSampleNum = 0;
	repSampleNum = 0;

	assignOffspring()

	updateTable()
	
	/*
	get element then use element i found and place it then put .text(variable)
	*/
}

function updateTable() {
	document.getElementById("t1").innerHTML = homoDNum
	document.getElementById("t2").innerHTML = heteroDNum
	document.getElementById("t3").innerHTML = homoRNum

}

function naturalSelection(){
}

function sampleWithReplacement(){
	var rand = Math.floor((Math.random() * offspring.length))
	var samp = offspring[rand];
	if(samp != undefined){
		repSampleNum += 1; 
		document.getElementById("result").innerHTML = "Sample #" + repSampleNum + " " + samp
	} 
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
	var samp = copy[rand]
	if(samp != undefined){
		noRepSampleNum += 1;
		document.getElementById("result").innerHTML = "Sample #" + noRepSampleNum + " " + samp;
		copy.splice(rand, 1);
	}	
}

function assignOffspring(){
	for(let i = 0; i < popSize; i++){
		console.log("pass");
		offspring[i] = assign();
	}
	
	for(let i = 0; i < offspring.length; i++){
		copy[i] = offspring[i];
	}
}

function killFrac(){
	var killD = document.getElementById("homoDTKin")
	killDin = killD.value
	homoDNum -= homoDNum*killDin
	var killHet = document.getElementById("hetTKin")
	killHetin = killHet.value
	heteroDNum -= heteroDNum*killHetin
	var killR = document.getElementById("homoRTKin")
	killRin = killR.value
	homoRNum -= homoRNum*killRin
	console.log(homoRNum)
	//document.write(homoDNum)
	updateTable()

}

var d = document.getElementById("run")
d.addEventListener("click", my)

var n = document.getElementById("natSelBut")
n.addEventListener("click", killFrac)

var s = document.getElementById("sample")
s.addEventListener("click", sampleWithReplacement)

var r = document.getElementById("noReplacement")
r.addEventListener("click", sampleNoReplacement)
