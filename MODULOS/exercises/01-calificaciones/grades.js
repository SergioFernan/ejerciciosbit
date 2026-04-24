
function calcularPromedios (notas) {
    let suma = 0
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    return suma/notas.length
}

function ObtenerEstado (nota){
    if(nota >= 3){
        return `aprobado`
    }
    else{
        return `reprobado`
    }
}

export function mejorEstudiante (lista) {
    let mejorNombre = "";
    let mejorPromedio = 0;
    for (let i = 0; i < lista.length; i++) {
        let estudiante = lista[i];
        let promedio = calcularPromedios(estudiante.notas);
        let nombre = estudiante.nombre;
        if(promedio > mejorPromedio){
            mejorPromedio = promedio
            mejorNombre = nombre
        }
    }
    console.log(`el mejor estudiante es ${mejorNombre}`)
    
}

export function mostrarPromedio(personas) {
    for (let i = 0; i < personas.length; i++) {
        let estudiante = personas[i];
        let promedio = calcularPromedios(estudiante.notas);
        let nombre = estudiante.nombre;
        console.log(`el esudiante ${nombre} tiene el siguiente promedio ${Number(promedio.toFixed(2))} el cual es ${ObtenerEstado(Number(promedio.toFixed(2)))}`)
    }
}




