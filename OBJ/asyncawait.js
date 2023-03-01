function rand(min = 0,max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() + (max - min) + min);
};

function esperaai(msg,tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string'){
                reject('ERROR')
                return;
            }
            resolve(msg.toUpperCase() + ' - Passou ')
            return;
        },tempo)
    })

}
async function execut(){

 const floor1 = await esperaai('Fase 1', rand());
 console.log(floor1);
 const floor2 = await esperaai('Fase 2', rand());
 console.log(floor2);
 const floor3 = await esperaai('Fase 3', rand());
 console.log(floor3); 


}
execut();