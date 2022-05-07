function insert (num){
   let number = document.getElementById("viewer").innerHTML 
   document.getElementById("viewer").innerHTML = number + num
}
function display (it){
    if (it === "ON"){
        document.getElementById("viewer").innerHTML = ""
        document.getElementById("viewer").style.backgroundColor = "#e8f0f6ec"

    }
    if (it === "OFF"){
        document.getElementById("viewer").innerHTML = ""
        document.getElementById("viewer").style.backgroundColor = "black"

    }
    if (it === "C"){
        document.getElementById("viewer").innerHTML = ""

    }
    if (it === "<"){

       let resultado =  document.getElementById("viewer").innerHTML;
        document.getElementById('viewer').innerHTML = resultado.substring(0,resultado.length -1)

    }
   
}
function finish() {
    let result = document.getElementById("viewer").innerHTML
        document.getElementById('viewer').innerHTML = eval(result)
}