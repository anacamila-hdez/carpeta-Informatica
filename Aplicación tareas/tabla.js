let tareas = []

let tabla = document.querySelector('#tareas')
// console.log(tabla)
function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.materia}</td><td>${tarea.descripcion}</td>
        <td>${tarea.fecha}</td></tr>`
    }
   
    tabla.innerHTML = contenidoTabla;
}

let form = document.querySelector("#formulario");

function addTarea(){
    let materiaNueva = document.querySelector("input[name=materia]").value
    let descripcionNueva = document.querySelector("input[name=descripcion]").value
    let fechaNueva = document.querySelector("input[name=fecha]").value
    
    let tareaNueva = {materia:materiaNueva, descripcion:descripcionNueva, fecha:fechaNueva}
    console.log("Ahora voy a añadir la siguiente tarea");
    console.log(tareaNueva)

    // añado el planeta a la lista
    tareas.push(tareaNueva)

    // generar de nuevo la tabla
    llenarTabla();
    // return false hace que no se actualice la página.
    return false;
}

form.onsubmit = addTarea;

llenarTabla();