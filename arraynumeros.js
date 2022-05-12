let numeros = []
for(let i = 0; i < 10; i++){
numeros.push(Math.floor(Math.random()*100))
}

console.log(numeros)

for(i in numeros){
    numeros [i] *= 2

}

console.log(numeros)