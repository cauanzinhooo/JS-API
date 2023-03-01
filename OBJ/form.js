class FormV {
    constructor(){
        this.form = document.querySelector('.formulario')
        this.events();
    }
    events(){
        this.form.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const valitating = this.isvalited();
    }
    isvalited(){
        let val = true;
        for( let campo of this.form.querySelectorAll('.validar')){
            if(!campo.value){
                this.senderror(campo,'Not Valid');
                let val = false;
            }
        }
    };
    senderror(campo,msg){
        const div = document.createElement('div');
        div.innerHTML  = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }
};
const np = new FormV();
