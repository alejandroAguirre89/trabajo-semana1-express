const {cursos, inscripcion} = require('./app');
const argv = require('yargs')
            .command('inscribir', 'Incripción a un curso', inscripcion)
            .argv
const express = require('express')
const app = express()

let listarCursos = cursos =>
{
    console.log('\nEsta es nuestra lista de cursos\n'); 

    cursos.forEach(function(curso, index) 
    {
        setTimeout(function()
        {
            console.log('Id del curso: '+curso.id+'\n' +
            'Nombre del curso: '+curso.nombre+'\n' +
            'Duración del curso: '+curso.duracion+'\n' +
            'Precio del curso: '+curso.valor+'\n'+
            '-----------------------------------');
        }, 2000 * index);
    });
}

let crearInscripcion = (argv, cursos) => {

    let cursoSeleccionado = cursos.find(curso=>curso.id == argv.i);

    if(cursoSeleccionado)
    {
        texto = 'Información del estudiante: <br>' +
                'Cedula: '+ argv.c + '<br>' +
                'Nombre: '+ argv.n + '<br>' +
                '--------------------------------------- <br>' +
                'Id del curso: '+cursoSeleccionado.id+'<br>' +
                'Nombre del curso: '+cursoSeleccionado.nombre+'<br>' +
                'Duración del curso: '+cursoSeleccionado.duracion+'<br>' +
                'Precio del curso: '+cursoSeleccionado.valor+'<br>'+
                '-----------------------------------';

        app.get('/', function (req, res) {
            res.send(texto)
        });
            
        app.listen(3000);
        console.log('\nSe ha realizado la inscripción exitosamente');
    }
    else
    {
        console.log('\nCurso No encontrado\n'); 
        listarCursos(cursos); 
    }
}

if(argv.i || argv.c || argv.n)
{
    crearInscripcion(argv, cursos);
}
else
{
    listarCursos(cursos);
}