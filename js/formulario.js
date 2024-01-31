// Realizar un formulario que solicite: nombre, apellido y teléfono de 
// un usuario, al guardar debe agregarse a una lista de usuarios en un 
// array. Y mostrar el nuevo array en consola.


const listaUsuarios = [];
const agregarUsuario = (e) => {
    e.preventDefault();
    const form = document.querySelector("#ejercicio1")
    const formData = new FormData(form)
    const json = {};
    for (let [key, value]  of formData.entries()){
        json[key] = value;
    }
    console.log("json user", json);
    listaUsuarios.push(json);
    console.log("Lista nueva", listaUsuarios);
    form.reset()
};