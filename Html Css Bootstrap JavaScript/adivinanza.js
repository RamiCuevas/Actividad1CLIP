var iniintentos = 0
    var intentos = 4;

function adivinanzaInstituto() {
    
    if (iniintentos===4) {
        alert("No te quedan mas intentos. La respuesta correcta era: INSTITUTO")
        document.getElementById("click").disabled = true;
    }
    
        var rtacorrecta = "INSTITUTO"
        var rtausuario = document.getElementById("rta1").value;
        
        do {
            if (rtausuario === rtacorrecta) {
                alert("Respuesta correcta, felicidades!")}
            else {  iniintentos++;
                    alert("Intentelo nuevamente.")}
                    if(iniintentos===2) {alert("Pista: A partir de este dato lo apodan como El rey de la B.")}
                    if(iniintentos===3) {alert("Pista: Su estadio se encuentra en el barrio Alta Córdoba.")}
                     break;
                    
            }
while(iniintentos <=4);
}