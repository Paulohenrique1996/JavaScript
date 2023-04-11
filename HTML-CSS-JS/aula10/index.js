var d = window.document.querySelector('div.area');
d.addEventListener('click', clicar)
d.addEventListener('mouseenter', entrar)
d.addEventListener('mouseout', saiu)


function clicar(){
    d.innerText = 'clicou'
    d.style.background = 'red'
}

function entrar(){
    
    d.innerText = 'entrou'
    d.style.background = 'rgb(10, 128, 150)'
    d.style.color = 'black' 
}

function saiu(){
    d.innerText = 'saiu'
    d.style.background = 'green'
    d.style.color = 'white'
}


//-------------------------------------------------------------


var cn1 = window.document.querySelector('input#cxn1')
var cn2 = window.document.querySelector('input#cxn2')


function somar(){
    var n1 = Number(cn1.value)
    var n2 = Number(cn2.value)

    var rr = window.document.querySelector('p.res')

    var s = n1 + n2
    rr.innerHTML = `<p>O resultado entre a soma de ${n1} e ${n2} é igual <strong>${s}</strong></p>`
}