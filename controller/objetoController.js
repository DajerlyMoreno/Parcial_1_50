const fs = require('fs');
const path = require('path');
const Objeto = require('../model/objeto');

let departamentos = [];
let municipios = [];
let objetos = [];

fs.readFile(path.join(__dirname, './../Recursos/departments.json'), 'utf-8', (err, data) => {
    if (err) throw err;
    departamentos = JSON.parse(data);  
});

fs.readFile(path.join(__dirname, './../Recursos/towns.json'), 'utf-8', (err, data) => {
    if (err) throw err;
    municipios = JSON.parse(data);  
});

exports.getInicio = (req, res) => {
    res.render('index', { objetos, departamentos, municipios });
};

exports.agregarObjeto = (req, res) => {
    const { nombre, departamento, municipio } = req.body;
    const departamentoEncontrado = departamentos.find(depto => depto.code === departamento);
    let nuevoObjeto = new Objeto(nombre, departamentoEncontrado.name, municipio);
    objetos.push(nuevoObjeto);
    res.redirect('/');
};

exports.getMunicipios = (req, res) => {
    const { departamentoCode } = req.params;
    const municipiosFiltrados = municipios.filter(municipio => municipio.department === departamentoCode);
    res.json(municipiosFiltrados);
};

