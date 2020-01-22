function tabuada () {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')

  if(num.value.length == 0){
    window.alert('Por favor digite um número')
    
  } else{
    //número digitado pelo usuário
    let n = Number(num.value)
    //variável contador para o while
    let c = 1
    //recurso para apagar quando digitar outra tabuada
    tab.innerHTML = ''
    while(c <= 10){
      //criando um elemento opção para o select
      let item = document.createElement('option')
      //transformando o option na tabuada
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      //adicionando um elemento filho
      tab.appendChild(item)
      //incrementando o valor de c
      c++
    }
  }
  
} 