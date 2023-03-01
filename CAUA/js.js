class fms{
    constructor(){
        this.forms = document.querySelector('.formm')
        this.starte();        
    }
    starte(){
        this.forms.addEventListener('submit', e =>{
        this.impedir(e);
        });
    }
    impedir(e){
        e.preventDefault(e);
        this.valited();
    }
    valited(){
        for(let errortext of this.forms.querySelectorAll('.errortext')){
            this.errortext.remove();
        }
        for(let campo of this.forms.querySelectorAll('.vl')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.sende(campo,`Campo ${label} Não pode ficar em branco.`);
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaruser(campo)) validd = false;

            }
        }
    }
    validaruser(campo){
        const usuario = campo.value;
        let validd = true;
        if( usuario.length < 3 || usuario.length > 12){
            this.sende(campo,'Necessita-se de 3 a 12 caracteres')
            validd = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.sende(campo, 'Necessita-se conter letras ou numeros')
            valid = false;
        }
        return validd
    }
    sende(campo,msg){
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('errortext')
        campo.insertAdjacentElement('afterend',div);
    }
}


const g1 = new fms();