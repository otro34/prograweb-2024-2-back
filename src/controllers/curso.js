import repository from "../repositories/curso.js";

const findAll = (req, res) => {
    const cursos = repository.findAll();

    return res.status(200).json(cursos);
}

const create = (req, res) => {
    const curso = req.body;
    const cursoCreated = repository.create(curso);
    return res.status(201).json(cursoCreated)
}

const findOne = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOne(id);

    return res.status(200).json(result);
}

const update = (req, res) => {
    const curso = req.body;
    const result = repository.update(curso);

    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update, remove }

export default controller;