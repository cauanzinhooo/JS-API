const talking = {
    talk(){
        console.log(`${this.name} is talking.`)
    }
}
const drink = {
    drink(){
        console.log(`${this.name} is drinking.`)
    }
}
const eat = {
    eat(){
        console.log(`${this.name} is eating.`)
    }
}
const PeopleProto = Object.assign({},talking,drink,eat);
function Peoplee(name,surname){
    return Object.create(PeopleProto,{
        name: {value: name},
        surname: {value: surname}
    });
}
const p1 = Peoplee('Luiz','Otavio')