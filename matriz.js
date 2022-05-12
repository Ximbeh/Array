let matriz = [[2, 4,8],[6, 4, 2], [4, 8, 6]]
for(let i in matriz){
console.log ("|", matriz [i][0], matriz [i][1], matriz [i][2], "|")

}

console.log(matriz[2][2])

for(i in matriz){
    matriz [i][0] *= 2

}
for(i in matriz){
    matriz [i][1] *= 2

}
for(i in matriz){
    matriz [i][2] *= 2

    console.log ("|", matriz[i][0], matriz[i][1], matriz[i][2], "|")
}

