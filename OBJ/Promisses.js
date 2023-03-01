function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() + (max - min) + min);
};

function esperaai(msg,tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(msg);
        },tempo)
    })

}
esperaai('Frase 1', rand( 3 , 5))
.then(function (resposta){
    console.log(resposta);
}
)