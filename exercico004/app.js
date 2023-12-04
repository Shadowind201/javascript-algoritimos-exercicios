function calcularmedia(){
    let nota1, nota2, nota3, nota4, media
    nota1 = document.getElementById("nota1").value
    nota2 = document.getElementById("nota2").value
    nota3 = document.getElementById("nota3").value
    nota4 = document.getElementById("nota4").value
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4
    document.getElementById("resultado").innerText = "Sua media é: " + media
}