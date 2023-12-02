function mostrarnumero(){
    let numero = document.getElementById("numero").value
    document.getElementById("resposta").innerText = "O numero informado foi: " + numero
    document.getElementById("numero").value = ""
}