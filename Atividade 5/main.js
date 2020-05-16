function result (n1,n2,n3){

    if(n1>n2 && n1>n3)
        return alert("Maior número é: " + n1);
    else
        if(n2>n1 && n2>n3)
        return alert("Maior número é: " + n2);
        else
            if(n3>n1 && n3>n2)
                return alert("Maior número é: " + n3);
            else
                if(n1 == n2 && n1 == n3)
                    return alert("Todos os númeroo sao iguais:");
                else
                    if(n2 == n3)
                        return alert("Maior número é:" + n2);
                    else
                        if(n1 == n3)
                            return alert("Maior número é:" + n1);
                        else
                            return alert("Maior número é: " + n1);
        
}

alert("Digite 3 numeros")
var n1 = prompt("Digite o primeiro numero")
var n2 = prompt("Digite o segundo numero")
var n3 = prompt("Digite o terceiro numero")
result(n1, n2, n3)