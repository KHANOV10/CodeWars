function abbrevName(name){
    let array = name.split(' ');
    console.log(`${array[0][0].toUpperCase()+'.'+ array[1][0].toUpperCase()}`)

    }
abbrevName('khanov firdaus')