const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }

}

const argv = require('yargs')
    .command('crear', 'crea un elemento por hace', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borra elemento  de listado por hacer', opts)

.help()
    .argv;

module.exports = {
    argv

}