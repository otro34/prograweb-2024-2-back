import repository from "../repositories/matricula.js";

const findAll = (req, res) => {
    const matricula = repository.findAll();

    return res.status(200).json(matricula);
}

const create = (req, res) => {
    const matricula = req.body;
    const matriculaCreated = repository.create(matricula);
    return res.status(201).json(matriculaCreated)
}

const findOne = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOne(id);

    return res.status(200).json(result);
}

const update = (req, res) => {
    const matricula = req.body;
    const result = repository.update(matricula);

    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update, remove }

export default controller;