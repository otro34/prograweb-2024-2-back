import model from "../models/estudiante.js";
import RepositoryBase from "../repositories/base.js";
const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    const estudiantes = await repository.findAll();

    return res.status(200).json(estudiantes);
}

const create = async (req, res) => {
    const estudiante = req.body;
    const estudianteCreated = await repository.create(estudiante);
    return res.status(201).json(estudianteCreated)
}

const findOne = async (req,res) => {
    
    const id = req.params.id;

    const result = await repository.findOne(id);

    return res.status(200).json(result);
}

const update = async (req, res) => {
    const estudiante = req.body;
    const result = await repository.update(estudiante);

    return res.status(200).json(result)
}

const remove = async (req, res) => {
    const id = req.params.id;

    const result = await repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update, remove }

export default controller;