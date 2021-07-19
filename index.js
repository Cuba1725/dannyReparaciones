
let contactInfo = firebase.database().ref("infos");
document.querySelector(".contacto").addEventListener("submit", submitform);
 
    function submitform(e) {
        e.preventDefault();

    let nombre = document.querySelector(".nombre").value;
    let correo = document.querySelector(".correo").value;
    let mensaje = document.querySelector(".mensaje").value;
    

    saveContactInfo(nombre, correo, mensaje);
    document.querySelector(".contacto").reset();

    if(nombre === '' || correo === '' || mensaje === ''){
        Swal.fire({
            title: "Error",
            text: "Todos los campos son obligatorios",
            icon: "error",
            confirmButtonText: "Confirmar"
        })
    } else {
        Swal.fire({
            title: `${nombre}`,
            text: "Tu mensaje fue enviado con exito!",
            icon: "success",
            confirmButtonText: "Confirmar"
        })
    }
    }
    


function saveContactInfo(nombre, correo, mensaje) {
    let nuevoContacto = contactInfo.push();

    nuevoContacto.set({
        nombre: nombre,
        correo: correo,
        mensaje: mensaje,
    });
}



