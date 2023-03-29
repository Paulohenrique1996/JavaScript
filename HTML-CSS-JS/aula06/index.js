var nome = window.prompt('Qual seu nome');
var n1 = Number(window.prompt("Digite uma nota!"));
var n2 = Number(window.prompt("Digite outro nota!"));
var idade = 27

var s = n1 + n2

document.write( `<h3> O aluno ${nome} de ${idade} anos tirou ${s} de média </h3>`);

document.write(`<p>E seu nome tem ${nome.length} letras</p>`)

document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}<br> e seu nome em menúsculo é ${nome.toLocaleLowerCase()}`)
