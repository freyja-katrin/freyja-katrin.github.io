var homoD, homorR, heteroD, popSize, homoDNum, heteroDNum, homoRNum, repSampleNum, noRepSampleNum, x, y, z
var genNum = 0;
var newP, newQ;
const pastTable = new Array().fill(new Array(4))
const offspring = new Array()
const copy = new Array()

function my() {

	homoDNum = 0
	heteroDNum = 0
	homoRNum = 0
	noRepSampleNum = 0;
	repSampleNum = 0;
	
	var ptext_field = document.getElementById("pfreq")
	const pinput = ptext_field.value
	console.log("p: " + pinput)
	var qtext_field = document.getElementById("qfreq")
	const qinput = qtext_field.value
	console.log("q: " + qinput)
	
	reuse()
	
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
	genNum += 1;
	document.getElementById("genNum").innerHTML = "generation #" + genNum
	
	assignOffspring()

	updateTable()

	calcDispNewPQ()


	
	
	/*
	get element then use element i found and place it then put .text(variable)
	*/
}

function calcDispNewPQ() {
	newP = (homoDNum*2 + heteroDNum)/(popSize*2)
	newP = Math.round((newP + Number.EPSILON)*100) / 100
	newQ = (homoRNum*2+heteroDNum)/(popSize*2)
	newQ = Math.round((newQ + Number.EPSILON)*100) / 100
	//calc q based on 1 - p
	newQ = 1-newP;

	document.getElementById("pVal").innerHTML = "p value: " + newP
	document.getElementById("qVal").innerHTML = "q value: " + newQ
}

function updateTable() {
	document.getElementById("t1").innerHTML = homoDNum
	document.getElementById("t2").innerHTML = heteroDNum
	document.getElementById("t3").innerHTML = homoRNum

	/*pastTable[genNum -1][0] = genNum;
	pastTable[genNum -1][1] = homoDNum
	pastTable[genNum -1][2] = heteroDNum
	pastTable[genNum -1][3] = homoRNum

	console.log(pastTable.toString)
	*/

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
	var toSub = 0
	var killD = document.getElementById("homoDTKin")
	killDin = killD.value
	toSub += homoDNum*killDin	
	homoDNum -= homoDNum*killDin

	var killHet = document.getElementById("hetTKin")
	killHetin = killHet.value
	toSub += heteroDNum*killHetin
	heteroDNum -= heteroDNum*killHetin

	var killR = document.getElementById("homoRTKin")
	killRin = killR.value
	toSub += homoRNum*killRin
	homoRNum -= homoRNum*killRin
	
	popSize -= toSub
	//document.write(homoDNum)
	calcDispNewPQ()
	updateTable()

}

function reuse() {
	if (document.getElementById("useNewCheck").checked) {
		document.getElementById("pfreq").value = newP
		document.getElementById("qfreq").value = newQ
	}
}

var d = document.getElementById("run")
d.addEventListener("click", my)

var n = document.getElementById("natSelBut")
n.addEventListener("click", killFrac)

var s = document.getElementById("sample")
s.addEventListener("click", sampleWithReplacement)

var r = document.getElementById("noReplacement")
r.addEventListener("click", sampleNoReplacement)

var c = document.getElementById("useNewCheck")
c.addEventListener("click", reuse)
