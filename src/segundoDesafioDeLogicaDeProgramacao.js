function rankedBalance(num1,num2){
    let subtraction = num1 - num2
    return subtraction
}

let level = 7
let result = rankedBalance(130,2)


if (result <= 10){
    let ranking = 'Ferro'
    console.log(`O Herói tem um KDA de ${result}, está no nível ${ranking}!`)
}
else if(result >= 11 && result <= 20){
    let ranking = 'Bronze'
    console.log(`O Herói tem um KDA de ${result}, está no nível ${ranking}!`)
}
else if(result >= 21 && result <= 50){
    let ranking = 'Prata'
    console.log(`O Herói tem um KDA de ${result}, está no nível ${ranking}!`)
}
else if(result >= 51 && result <= 80){
    let ranking = 'Ouro'
    console.log(`O Herói tem um KDA de ${result}, está no nível ${ranking}!`)
}
else if(result >= 81 && result <= 90){
    let ranking = 'Diamante'
    console.log(`O Herói tem um KDA de ${result}, está no nível ${ranking}!`)
}
else if(result >= 91 && result <= 100){
    let ranking = 'Lendário'
    console.log(`O Herói tem um KDA de ${result}, está no nível ${ranking}!`)
}
else{
    let ranking = 'Imortal'
    console.log(`O Herói tem um KDA de ${result}, está no nível ${ranking}!`)
}
