const loginFunc = () => {
  const loginForm = document.getElementById("modalForm");
  const registerForm = document.getElementById("modalFormRegister")
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    //MODAL PARA VALIDACION DE INGRESO
    if(e.target == loginForm){
    
    const err = [];
    const emailInput = document.getElementById("loginEmail");
    const passInput = document.getElementById("loginPassword");
    let emailArr = emailInput.value.split("@");
    
    if (emailArr.length != 2) {
      err.push('\n* Email debe contener un "@"');
    }else if (emailArr[0].length == 0 || emailArr[1].length == 0) {
      err.push("\n* Email invalido");
    }

    if (passInput.value.length < 5) {
      err.push("\n* Password debe contener almenos 5 caracteres");
    } 

    if (err.length > 0){
      alert("Revisa tus datos: " + err + ".");
    } else {
      alert("Se ingresaron los datos correctamente!.");
    }
    
  } else if (e.target == registerForm){
    //MODAL PARA VALIDACION DE REGISTRO
    const nameRegister = document.getElementById("registerName");
    const emailRegister = document.getElementById("registerEmail")
    const registerPassword = document.getElementById("registerPassword")
    const repeatPassword = document.getElementById("repeatPassword")
    
    let err = [];
    let emailArr = emailRegister.value.split("@");

    if(nameRegister.value.length < 2){
      err.push("\n* Nombre demasiado corto")
    }

    if(emailArr.length != 2){
      err.push("\n* Email debe contener un `@`")
    }else if (emailArr[0].length == 0 || emailArr[1].length == 0) {
      err.push("\n* Email invalido")
    }

    if (registerPassword.value.length < 5) {
      err.push("\n* Password debe contener almenos 5 caracteres")
    }else if(registerPassword.value != repeatPassword.value) {
      err.push("\n* Las contraseñas no coinciden")
    }

    if (err.length > 0){
      alert("Revisa tus datos: " + err + ".");
    } else {
      alert("Se ingresaron los datos correctamente!.");
    }
  }});
}; 
export default loginFunc;
