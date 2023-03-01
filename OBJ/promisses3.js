const nomecerto = 'jose';

function qualeonome(callback, errorcallback){
    return new Promise((resolve,reject) =>{
        if(nomecerto != 'jose' && nomecerto  != 'clovis'){
            reject({
                name: 'Está errado',
                message: nomecerto + 'Isso ai meu mano'
            })
        }else{
            resolve({
                name: nomecerto,
                message: ' vai dominar o mundo'
            })
        }
    })
}

qualeonome().then((result) =>{
    console.log(result.name  + result.message);
}).catch((error) =>{
    console.log(error.name + 'RUIM' + error.message)
})