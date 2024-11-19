import model from '../models/curso.js'

let cursos = [...model];

const findAll = () => {
    return cursos;
}

const create = (curso) => {
    cursos.push(curso);
    
    return curso;
}

const findOne = (id) => {
    const result = cursos.find(x => x.id == id);

    return result;
}

const update = (curso) => {
    const index = cursos.findIndex(item => item.id == curso.id);

    if (index > -1) {
        cursos[index] = curso;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = cursos.findIndex(item => item.id == id);

    if (index > -1) {
        cursos.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne, update, remove }

export default repository;