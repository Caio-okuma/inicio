function soma(){
    var n1 =  parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    document.getElementById('resultado').textContent = n1+n2    
}

function sub(){
    var n1 =  parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    document.getElementById('resultado').textContent = n1-n2    
}

function multi(){
    var n1 =  parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    document.getElementById('resultado').textContent = n1*n2    
}

function div(){
    var n1 =  parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    document.getElementById('resultado').textContent = n1/n2    
}

function media(){
    var n1 =  parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var n3 =  parseFloat(document.getElementById("n3").value)
    var n4 =  parseFloat(document.getElementById("n4").value)
    var n5 =  parseFloat(document.getElementById("n5").value)

    document.getElementById('resultado').textContent = (n1+n2+n3+n4+n5)/5  
}