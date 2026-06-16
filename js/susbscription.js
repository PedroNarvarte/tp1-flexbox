function showError(input, message){
    input.nextElementSibling.textContent = message;
}

function clearError(input){
    input.nextElementSibling.textContent = "";
}

function validateName(){

    const input = document.getElementById("fullName");
    const value = input.value.trim();

    if(value.length <= 6 || !value.includes(" ")){
        showError(input,
        "Debe tener más de 6 letras y un espacio.");
        return false;
    }

    return true;
}

function validateEmail(){

    const input = document.getElementById("email");

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(input.value)){
        showError(input,
        "Email inválido.");
        return false;
    }

    return true;
}

function validatePassword(){

    const input =
    document.getElementById("password");

    const regex =
    /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if(!regex.test(input.value)){
        showError(input,
        "Debe tener 8 caracteres, letras y números.");
        return false;
    }

    return true;
}

function validateRepeatPassword(){

    const password =
    document.getElementById("password").value;

    const repeat =
    document.getElementById("repeatPassword");

    if(password !== repeat.value){
        showError(repeat,
        "Las contraseñas no coinciden.");
        return false;
    }

    return true;
}

function validateAge(){

    const input =
    document.getElementById("age");

    if(parseInt(input.value) < 18){
        showError(input,
        "Debe ser mayor de edad.");
        return false;
    }

    return true;
}

function validatePhone(){

    const input =
    document.getElementById("phone");

    const regex = /^\d{7,}$/;

    if(!regex.test(input.value)){
        showError(input,
        "Debe contener al menos 7 dígitos.");
        return false;
    }

    return true;
}

function validateAddress(){

    const input =
    document.getElementById("address");

    const regex =
    /^[A-Za-zÁÉÍÓÚáéíóú0-9]+\s[A-Za-zÁÉÍÓÚáéíóú0-9\s]+$/;

    if(input.value.length < 5 ||
       !regex.test(input.value)){
        showError(input,
        "Dirección inválida.");
        return false;
    }

    return true;
}

function validateCity(){

    const input =
    document.getElementById("city");

    if(input.value.length < 3){
        showError(input,
        "Mínimo 3 caracteres.");
        return false;
    }

    return true;
}

function validatePostalCode(){

    const input =
    document.getElementById("postalCode");

    if(input.value.length < 3){
        showError(input,
        "Mínimo 3 caracteres.");
        return false;
    }

    return true;
}

function validateDni(){

    const input =
    document.getElementById("dni");

    const regex = /^\d{7,8}$/;

    if(!regex.test(input.value)){
        showError(input,
        "Debe tener 7 u 8 dígitos.");
        return false;
    }

    return true;
}

document.getElementById("fullName")
.addEventListener("blur", validateName);

document.getElementById("fullName")
.addEventListener("focus", function(){
    clearError(this);
});

const nombre =
document.getElementById("fullName");

const titulo =
document.getElementById("tituloFormulario");

nombre.addEventListener("keyup", function(){

    if(this.value.trim() === ""){
        titulo.textContent = "HOLA";
    }else{
        titulo.textContent =
        "HOLA " + this.value.toUpperCase();
    }

});

document
.getElementById("subscriptionForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let validaciones = [

        validateName(),
        validateEmail(),
        validatePassword(),
        validateRepeatPassword(),
        validateAge(),
        validatePhone(),
        validateAddress(),
        validateCity(),
        validatePostalCode(),
        validateDni()

    ];

    if(validaciones.every(v => v)){

        alert(`
Nombre: ${fullName.value}
Email: ${email.value}
Edad: ${age.value}
Teléfono: ${phone.value}
Dirección: ${address.value}
Ciudad: ${city.value}
CP: ${postalCode.value}
DNI: ${dni.value}
        `);

    }else{

        alert("Existen errores en el formulario.");

    }

});