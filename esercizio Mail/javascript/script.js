
//RICHIESTA MAIL DELL'UTENTE
var userRequest = prompt ("Qual è la tua mail ?");

var mailList = ["nomecognome@aruba.it", "nomefasullo@gmail.com", "boolean@boolean.it", "francopippo@gmail.com", "pluto@outlook.it"];


var foundMail = false;
for(var i = 0; i < mailList.length; i++){
    var  mailSearched = mailList[i];
    if(userRequest === mailSearched  ){   
        foundMail = true;
    break;
    }
}
if(foundMail){
   document.getElementById("result").innerHTML = "Accesso Eseguito. <br> Attendi il caricamento della pagina";
}else{
    document.getElementById("result").innerHTML = "Mail inserita non corretta. Si prega di riprovare";
}