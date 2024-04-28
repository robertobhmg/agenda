//Função do botão limpar
const cadastroForm = document.getElementById('cad-form');
const btnCancelar = document.querySelector('.btn-cancelar');


btnCancelar.addEventListener('click', function (event) {
    event.preventDefault();
    cadastroForm.reset();
});



//Função do botão cadastrar
const save = (text) => {
    const cadBtn = document.createElement("button");
    cadBtn.classList.add("cad-btn");
}







 

//máscara para telefone
const inputTelefone = document.getElementById('telefone');


inputTelefone.addEventListener('input', function(e) {
    e.preventDefault();
    let telefone = this.value.replace(/\D/g, '');
        
    if (telefone.length === 10) {
        telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (telefone.length > 10) {
        telefone = telefone.slice(0, 10);
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    this.value = telefone;
});

const inputCel_1 = document.getElementById('cel_1');

inputCel_1.addEventListener('input', function(e) {
    e.preventDefault();
    let telefone = this.value.replace(/\D/g, '');
        
    if (telefone.length === 11) {
        telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2.$3-$4');
    } else if (telefone.length > 11) {
        telefone = telefone.slice(0, 11);
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    this.value = telefone;
});

const inputCel_2 = document.getElementById('cel_2');

inputCel_2.addEventListener('input', function(e) {
    e.preventDefault();
    let telefone = this.value.replace(/\D/g, '');
        
    if (telefone.length === 11) {
        telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2.$3-$4');
    } else if (telefone.length > 11) {
        telefone = telefone.slice(0, 11);
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    this.value = telefone;
});

//Máscara para CEP
const inputCep = document.getElementById('cep');

inputCep.addEventListener('input', function(e) {
    e.preventDefault();
    let cep = this.value.replace(/\D/g, '');
       
    if (cep.length === 8) {
        cep = cep.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
    } else if (cep.length > 8) {
        cep = cep.slice(0, 8);
        cep = cep.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
    }
    this.value = cep;
});








