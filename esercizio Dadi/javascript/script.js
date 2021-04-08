var userName = prompt("Ciao ! come ti chiami ?");

// console.log(userName);

alert("Benvenuto " + userName);

alert("Giochiamo a dadi. Premi OK per effettuare il tuo lancio");

var dadoUtente = Math.floor(Math.random() * 6 ) + 1 ;

document.getElementById("lancioUtente").innerHTML = "Lancio " + userName + " --> " + dadoUtente;


var dadoCpu = Math.floor(Math.random() * 6 ) + 1 ;

document.getElementById("lancioCpu").innerHTML = "Lancio CPU --> " + dadoCpu;


if (dadoCpu > dadoUtente){
   document.getElementById("risultato").innerHTML = "<strong> Mi dispiace " + userName + " , hai perso </strong>"
}

else if (dadoCpu === dadoUtente){
   document.getElementById("risultato").innerHTML = "<strong> Hai pareggiato contro il computer</strong>"
}

else{
   document.getElementById("risultato").innerHTML = " <strong> Complimenti " + userName + " , hai vinto </strong>"
}











