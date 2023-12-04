function calcularsoma(){
    let numero1, numero2, resposta
    numero1 = document.getElementById("numero1").value
    numero2 = document.getElementById("numero2").value
    resposta = (parseFloat(numero1) + parseFloat(numero2))
    document.getElementById("resultado").innerText = "A soma é: " + resposta
}