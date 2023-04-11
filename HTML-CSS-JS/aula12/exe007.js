var idade = Number('1')

if(idade>=18){
    console.log(`Você tem ${idade} anos, já é de maior`)
}else{
    if (idade >= 16){
        console.log(`Você tem ${idade} anos é um adolecente `)
    }else{
        if(idade>=7){
            console.log(`Você tem ${idade} anos é uma criança `)
        
        }else{
            if (idade<=6){
                console.log(`Você tem ${idade} anos é um bebê `)
            }
        } 
    }

}