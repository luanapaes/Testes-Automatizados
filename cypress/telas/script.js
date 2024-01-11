var $txtEmail = document.getElementById('email');
var $txtSenha = document.getElementById('password');
var $btnEntrar = document.getElementById('btn-entrar');



$btnEntrar.addEventListener('click', (e) =>{
    e.preventDefault();

    if($txtEmail.value === 'luana@gmail.com' && $txtSenha.value === '102030'){
        window.location = 'home.html'
    }
    else{
        alert('Email ou senha invalidos');
    }

})
