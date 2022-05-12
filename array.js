let nomes = ["Cebolinha", "Cascao", "Monica", "Magali"]

for(let i = 0; i < nomes.length; i++){
console.log(nomes[i])

}



for (let i in nomes){
console.log(nomes[i])

}

for (let nome of nomes){
console.log(nome, nome.length)

}

console.log(nomes.length)