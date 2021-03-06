let tareas = JSON.parse(localStorage.getItem("tareas"));
if (tareas == null) {
    tareas = []
};


let tabla = document.querySelector('#tareas')
let form = document.querySelector("#formulario");

function llenarTabla(){
    let contenidoTabla = '<tr><th scope="col">Materia</th><th scope="col">Descripción</th><th scope="col">Fecha</th><th scope="col"></th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td scope="row">${tarea.materia}</td>
        <td>${tarea.descripcion}</td>
        <td>${tarea.fecha}</td>
        <td><button>Borrar</button></td></tr>`
    }
   
    tabla.innerHTML = contenidoTabla;
}

function addTarea(){
    let materiaNueva = document.querySelector("input[name=materia]").value
    let descripcionNueva = document.querySelector("input[name=descripcion]").value 
    let fechaNueva = document.querySelector("input[name=fecha]").value 
    
    let tareaNueva = {materia:materiaNueva, descripcion:descripcionNueva, fecha:fechaNueva}

    tareas.push(tareaNueva)

    localStorage.setItem("tareas", JSON.stringify(tareas));

    llenarTabla();
}

form.onsubmit = addTarea;

let formBorrar = document.querySelector("#formularioDelete");

function deleteTarea(){
    let materiaTareaABorrar = document.querySelector("#formularioDelete input[name=materia]").value
    
    let aBorrar = tareas.findIndex(tarea => tarea.materia == materiaTareaABorrar);

    if(aBorrar == -1) {
        alert("Tarea de la materia no encontrada")
    } else {
        tareas.splice(aBorrar, 1);
    }

    localStorage.setItem("tareas", JSON.stringify(tareas));

    llenarTabla();

    return false;
}

formBorrar.onsubmit = deleteTarea;

llenarTabla();