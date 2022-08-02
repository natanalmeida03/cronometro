var seconds=00
var minutes=00
var hours=00

var interval

minutes = adicionaZero(minutes)
hours = adicionaZero(hours)

var rodando="false"

function start(){
	if(rodando=="false"){
		rodando="true"
		cronometro()
		console.log('iniciou')
		interval = setInterval(cronometro,1000)
	}
}

function stop(){

	rodando="false"

	console.log('parou')
	clearInterval(interval)

	seconds=00
	minutes=00
	hours=00

	seconds = adicionaZero(seconds)
	minutes = adicionaZero(minutes)
	hours = adicionaZero(hours)

	document.getElementById('timer').innerText = hours+':'+minutes+':'+seconds
}

function pause(){
	rodando="false"
	clearInterval(interval)
	console.log('pause')
}

function cronometro(){

	seconds++
	seconds = adicionaZero(seconds)

	if(seconds==60){
		seconds=00
		minutes++
		minutes = adicionaZero(minutes)
		if(minutes==60){
			minutes=00
			hours++
			minutes = adicionaZero(minutes)
			hours = adicionaZero(hours)
		}
	}

	document.getElementById('timer').innerText = hours+':'+minutes+':'+seconds
	console.log('funcionou')
}

function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}