var n1 = 1
var n2 = 5
var n3 = 9

var maior, menor

if(n1 > n2){
    maior = n1
}
else{
    maior = n2
}
if (n3 > maior){
    maior = n3
}
else{
}
menor = maior 

if (n1 < menor){
    menor = n1
}
else if (n2 < menor){
    menor = n2
}
else{
    menor = n3
}

console.log("O maior valor dos 3 é: " + maior + ", e o menor é: " + menor)
