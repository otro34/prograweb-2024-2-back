import model from "../models/docente.js";
import RepositoryBase from "../repositories/base.js";

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    const docentes = await repository.findAll();

    return res.status(200).json(docentes);
}

const create = async (req, res) => {
    const docente = req.body;
    const docenteCreated = await repository.create(docente);
    return res.status(201).json(docenteCreated)
}

const findOne = async (req,res) => {
    
    const id = req.params.id;

    const result = await repository.findOne(id);

    return res.status(200).json(result);
}

const update = async (req, res) => {
    const docente = req.body;
    const result = await repository.update(docente);

    return res.status(200).json(result)
}

const remove = async (req, res) => {
    const id = req.params.id;

    const result = await repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update, remove }

export default controller;