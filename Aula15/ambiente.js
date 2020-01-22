
let num = [58,10,23,56,80]
num.push(1)
num.sort()
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
  console.log(`O valor não foi encontrado!`)
} else{
  console.log(`O valor 8 está na posição ${pos}`)
}


/*
//cria um elemento
num.push(7)



//para saber o tamanho do array
//length em js não é metodo e sim atributo
num.length
// método que pega todos os elementos e coloca em ordem crescente
num.sort() */