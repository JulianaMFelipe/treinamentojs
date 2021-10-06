
var ladoA = 10
var ladoB = 9
var ladoC = 7

if ((ladoA + ladoB) > ladoC && (ladoB + ladoC) > ladoA && (ladoC + ladoA) > ladoB){
    //SE FOR UM TRIANGULO, REALIZO CONDICIONANTE PARA VERIFICAR O TIPO, SE
    // EQUILÁTERO, ISÓCELES E ESCALENO
    if(ladoA === ladoB && ladoA === ladoC){
        console.log("Triângulo equilátero")
    }
    else if(ladoA === ladoB || (ladoA === ladoC) || (ladoC === ladoC)){
        console.log("Triângulo isócelse")
    }
    else {
        console.log("Triângulo escaleno")
    }
}
else{
    console.log("NÃO É UM TRIÂNGULO")
}
