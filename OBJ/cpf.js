class CPFV {
    constructor(Send){
        Object.defineProperty(this,'CleanCPF',{
            writable: false,
            enumerable: true,
            configurable: false,
            value: Send.replace(/\D+/g,'')

        });
    }

    order(){
        return this.CleanCPF.charAt(0).repeat(11) === this.CleanCPF;
    }

    confirm(){
        if(!this.CleanCPF) return false;
        if(typeof this.CleanCPF !== 'string') return false;
        if(this.CleanCPF.length !== 11) return false;
        if(this.order()) return false;

        return this.CleanCPF

    }



}

const pf = new CPFV('69193550191');
console.log(pf.confirm());