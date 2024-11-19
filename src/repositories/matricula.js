import model from '../models/matricula.js'
import cursoRepository from './curso.js';   

let matriculas = [...model];
let n = matriculas.length;

const findAll = () => {
    const newMatricula = matriculas.map(item => {
        return {
            ...item,
            cursos: item.cursos?.map(x => cursoRepository.findOne(x?.id))    
        }
    });

    return newMatricula;    
}

const create = (matricula) => {
    matricula.id = ++n;
    matriculas.push(matricula);
    
    return matricula;
}

const findOne = (id) => {
    const result = matriculas.find(x => x.id == id);

    return result;
}

const update = (carrera) => {
    const index = matriculas.findIndex(item => item.id == carrera.id);

    if (index > -1) {
        matriculas[index] = carrera;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = matriculas.findIndex(item => item.id == id);

    if (index > -1) {
        matriculas.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne, update, remove }

export default repository;