var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()



console.log(`Agora são ${hora} horas e ${minutos} minutos`)

if (hora >= 6 && hora <= 11) {
    console.log(`Bom Dia!!!`)
} else if (hora <= 18 && hora >= 12){
    console.log(`Boa Tarde!!!`)
} else if (hora >= 1 && hora <= 5){
    console.log(`Começou o corujão, Boa Mdrugada!!!`)
}
    else{
    console.log(`Boa Noite!!!..`)
}