const form = document.getElementById('form');
const usuario = document.getElementById('username');
const password = document.getElementById('password');
const enviar = document.getElementById('enviar');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
    });
    
    function checkInputs() {
	const usuarioValue = usuario.value.trim();
	
	const passwordValue = password.value.trim();
	usuario = suastegui;
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
	
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
    window.location.href = 'index.html';
    
}


    
    
    


