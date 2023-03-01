class FormV{
    constructor(){
        this.formss = document.querySelector('#formt');
        this.starte();
    }
    starte(){
        this.formss.addEventListener('submit', e =>{
        this.handlesubmit(e);
        });
    }
    handlesubmit(e){
        e.preventDefault(e);
        const validating = this.valited();
    }
    valited(){
        for( let errortext of this.formss.querySelectorAll('.error-text')){
            this.errortext.remove();
        }
        let confirm = true;
        for( let campo of this.formss.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value ){
                this.sende(campo,`Campo ${label} não pode estar em branco.`)
                let confirm = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.CPFV(campo)) valid = false;
            }
        }
    }
    CPFV(campo){
        const cpf = new CPFV(campo.value);
        if(!cpf.value){
            this.sende(campo, 'CPF invalido');
            return false;

        }
        return true;
    }
    sende(campo,msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }

}

const nf = new FormV();