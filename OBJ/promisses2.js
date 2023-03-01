let p = new Promise((resolve, reject) =>{
    let a = 2 + 1;
    if ( a == 2){
        resolve('Tubarão Te Amo');
    }
    else{
        reject('Falcão te amo');
    }
})

p.then((msg) =>{
    console.log('SUCESSO ' + msg);
}).catch((msg) =>{
    console.log('ERROR')
})