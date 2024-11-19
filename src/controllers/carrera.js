import model from "../models/carrera.js";

import RepositoryBase from "../repositories/base.js";

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
    const carrera = await repository.findAll();

    return res.status(200).json(carrera);
}

const create = async (req, res) => {
    const carrera = req.body;
    const carreraCreated = await repository.create(carrera);
    return res.status(201).json(carreraCreated)
}

const findOne = async (req,res) => {
    
    const id = req.params.id;

    const result = await repository.findOne(id);

    return res.status(200).json(result);
}

const update = async (req, res) => {
    const carrera = req.body;
    const result = await repository.update(carrera);

    return res.status(200).json(result)
}

const remove = async (req, res) => {
    const id = req.params.id;

    const result = await repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update, remove }

export default controller;