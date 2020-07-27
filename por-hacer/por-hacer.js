const fs = require('fs');
const { describe } = require('yargs');
let listadoPOrHacer = [];



const guardardb = () => {
    let data = JSON.stringify(listadoPOrHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPOrHacer = require('../db/data.json');
    } catch (error) {

        listadoPOrHacer = [];
    }
}

const getListado = () => {

    cargarDB();
    return listadoPOrHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPOrHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // console.log(index);
    if (index >= 0) {
        listadoPOrHacer[index].completado = completado;
        guardardb();
        return true
    } else {
        return false;
    }
}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPOrHacer.push(porHacer);
    guardardb();
    return porHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    // let index = listadoPOrHacer.findIndex(tarea => tarea.descripcion === descripcion);
    let nuevoListado = listadoPOrHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (nuevoListado.length === listadoPOrHacer.length) {
        return false;
    } else {
        listadoPOrHacer = nuevoListado;
        guardardb();
        return true;
    }


    console.log(index);

    if (index >= 0) {

        return true;
    } else {
        return false;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}