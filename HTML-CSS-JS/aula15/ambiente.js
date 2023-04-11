var obj = [6, 5, 4, 8, 9, 7]
obj.sort()
console.log(obj)
console.log(`o vetor tem ${obj.length} posições`)
console.log(`a sexta posição é o ${obj[5]}`)
var ipos = (obj.indexOf(4))
if (ipos==-1){
    console.log('[ERRO] Não encontamos no número')
}else{
    console.log(`O numero 4 está na posição ${ipos}`)
}










console.log('__________________________________')



// for(var pos = Number(0);pos<obj.length;pos++){
//     console.log(`a posição ${pos} tem o valor ${obj[pos]}`)
// }
var pos = Number(0)
for(pos in obj){
    console.log(`a posição ${pos} tem o valor ${obj[pos]}`)  
}