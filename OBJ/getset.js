const _speed = Symbol('speed')
class Car{
    constructor(Model){
        this.Model = Model,
        this[_speed] = 0;
    }
    set accelerate (value){
        if ( typeof value != 'number') return;
        if ( value >= 100 || value <= 0) return;
        this[_speed] = value;
    }
    get accelerate(){
        return this[_speed];
    }
    speed(){
        if ( this[_speed] >= 100) return;
        ++this[_speed];
    }
}
fusca = new Car('Bugatti');
fusca.speed = 99;
console.log(fusca.speed);