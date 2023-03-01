class dispositivos {
    constructor(name){
        this.model = name;
        this.onoff = false;
    }
    on(){
        if(this.onoff){
            console.log('ON');
            return;
        }
        this.onoff = true;
    }
    off(){
        if(!this.onoff){
            console.log('OFF');
            return;
        }
        this.onoff = false;
    }
}
class Smartphones extends dispositivos{
    constructor(name,cor){
        super(name);
        this.cor = cor;
    }
}
const d1 = new dispositivos('Bugatti');
console.log(d1);