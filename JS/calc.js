let primeiroValor;
let segundoValor;
let operador

function funcaoDeCalculo(){
    primeiroValor = Number(document.getElementById("valorA").value);
    segundoValor = Number(document.getElementById("valorB").value);
    operador = document.getElementById("operador").value

    if(operador == "s"){
        resultado = funcaoSoma(primeiroValor, segundoValor)
        document.getElementById("resultado").innerHTML=resultado;
    }
    
    else if(operador == "u"){
        resultado = funcaoSub(primeiroValor, segundoValor)
        document.getElementById("resultado").innerHTML=resultado;
    }

    else if(operador == "m"){
        resultado = funcaoMulti(primeiroValor, segundoValor)
        document.getElementById("resultado").innerHTML=resultado;
    }
    else if(operador == "d"){
        resultado = funcaoDiv(primeiroValor, segundoValor)
        document.getElementById("resultado").innerHTML=resultado;
    }

}

function funcaoSoma(primeiroValor, segundoValor){
    return primeiroValor + segundoValor;
}
function funcaoSub(primeiroValor, segundoValor){
    return primeiroValor - segundoValor;
}
function funcaoMulti(primeiroValor, segundoValor){
    return primeiroValor * segundoValor;
}
function funcaoDiv(primeiroValor, segundoValor){
    return primeiroValor / segundoValor;
}