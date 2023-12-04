function converter(){
    let metros, cent
    metros = document.getElementById("metros").value
    cent = (parseFloat(metros) * 100)
    document.getElementById("resultado").innerText = metros + "m são " + cent + "cm"
}