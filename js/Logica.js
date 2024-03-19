//NOTE - VALIDACION FORMULARIO INDEX
function validarYEnviarFormulario() {
  let emailInput = document.getElementById("entradaEmail");
  let passwordInput = document.getElementById("entradaPassword");
  let isValid = true;

  // Validación básica: verificar si el correo electrónico y la contraseña no están vacíos
  if (emailInput.value.trim() === "") {
    isValid = false;
    alert("Por favor ingresa un email válido.");
  }

  if (passwordInput.value.trim() === "") {
    isValid = false;
    alert("Por favor ingresa una contraseña válida.");
  }

  if (isValid) {
    // Si el formulario es válido, reenvia a index
    window.location.href = "/paginas/menu.html";
    //
  }
}

//NOTE - SCRIPT PARA VALIDAR FORMULARIO AGREGAR CONTACTO
function validarFormulario() {
  let monto = document.getElementById("DepositoMonto").value;
  let nombre = document.getElementById("IngresaNombre").value;
  let cedula = document.getElementById("IngresaCedula").value;
  let isValid = true;

  if (monto.trim() === "" || isNaN(monto)) {
    isValid = false;
    alert("Por favor, ingrese un monto válido.");
    return;
  }

  if (nombre.trim() === "") {
    isValid = false;
    alert("Por favor, ingrese su nombre.");
    return;
  }

  if (cedula.trim() === "") {
    isValid = false;
    alert("Por favor, ingrese su Cédula de Identidad.");
    return;
  }

  if (isValid) {
    // Si el formulario es válido, reenvia a index
    window.location.href = "/paginas/transactions.html";
  }
  // Si todos los campos están llenos y y son validos, se puede envia el formulario
  alert("¡Formulario válido! Se puede enviar.");
}

//NOTE - SECCION DE SENDMONEY , AGREGAR EL NOMBRE POR CAMPOS Y CREAR UNA NUEVA LI

//SECTION - BOTON AGREGAR CONTACTO

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("agregarContacto")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

      // Obtener valores de los campos de entrada
      let nombre = document.getElementById("agregarNombre").value;
      let rut = document.getElementById("agregarRut").value;
      let alias = document.getElementById("agregarAlias").value;
      let banco = document.getElementById("agregarBanco").value;

      // Crear un nuevo elemento li para el nuevo contacto
      let nuevoContacto = document.createElement("li");
      nuevoContacto.className = "list-group-item";

      // Crear un nuevo div para la información del contacto
      let divContacto = document.createElement("div");
      divContacto.className = "contactInfo";

      // Crear span para el nombre del contacto
      let spanNombre = document.createElement("span");
      spanNombre.className = "contactoNombre";
      spanNombre.textContent = nombre;

      // Crear span para los detalles del contacto
      let spanDetalle = document.createElement("span");
      spanDetalle.className = "contactoDetalle";
      spanDetalle.textContent =
        "RUT: " + rut + ", Alias: " + alias + ", Banco: " + banco;

      // Agregar spans al div del contacto
      divContacto.appendChild(spanNombre);
      divContacto.appendChild(spanDetalle);

      // Agregar div del contacto al elemento li
      nuevoContacto.appendChild(divContacto);

      // Agregar nuevo contacto a la lista de contactos
      document.getElementById("contactoLista").appendChild(nuevoContacto);
    });

  //SECTION - BOTON ELIMINAR CONTACTO
  document
    .getElementById("borrarContactos")
    .addEventListener("click", function () {
      document.getElementById("contactoLista").innerHTML = ""; // Eliminar todos los elementos dentro de la lista de contactos
    });
});

//SECTION - BOTON ENVIAR DINERO
document;
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnEnviarDinero")
    .addEventListener("click", function () {
      // Mostrar alerta de dinero enviado
      alert("Dinero enviado");

      // Redirigir a la página de transacciones
      window.location.href = "/paginas/transactions.html";
    });
});
