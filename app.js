let cursos = [
    {
        id: 1,
        nombre: 'Node JS',
        duracion: 32,
        valor: 0
    },
    {
        id: 2,
        nombre: 'Laravel 5.8',
        duracion: 24,
        valor: 100
    },
    {
        id: 3,
        nombre: 'Spring MVC 5',
        duracion: 72,
        valor: 300
    },
    {
        id: 4,
        nombre: 'Vue JS',
        duracion: 32,
        valor: 0
    },
    {
        id: 5,
        nombre: 'Angular',
        duracion: 40,
        valor: 0
    }
];

const inscripcion = 
{
    id:{
        demand: true,
        alias: 'i'
    },
    cedula:{
        demand: true,
        alias: 'c'
    },
    nombre:{
        demand: true,
        alias: 'n'
    }
};

module.exports = {
    cursos,
    inscripcion
};