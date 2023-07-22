const loginFunc = () => {
  const loginForm = document.getElementById("modalForm");
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    let validation = false;
    const err = [];
    const emailInput = document.getElementById("loginEmail");
    console.log(emailInput.value);
    let emailArr = emailInput.value.split("@");
    if (emailArr.length === 2) {
      if (emailArr[0].length > 0 && emailArr[1].length > 0) {
        const passInput = document.getElementById("loginPassword");
        if (passInput.value.length > 5) {
          validation = true;
        } else {
          validation = false;
          err.push("Password debe contener almenos 5 caracteres.");
        }
      } else {
        validation = false;
        err.push("email invalido.");
      }
    } else {
      validation = false;
      err.push('email debe contener un "@"');
    }
    if (validation === true) {
      alert("se ingresaron los datos correctamente!");
    } else {
      alert("revisa tus datos: " + err);
    }
  });
};
export default loginFunc;
