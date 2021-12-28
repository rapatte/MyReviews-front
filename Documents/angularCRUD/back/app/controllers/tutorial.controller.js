const db = require('../models');
const Tutorial = db.tutorials;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: 'Content must have a title' });
        return;
    }

    const tutorial = new Tutorial ({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    });

    tutorial.save(tutorial)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the tutorial.'
            })
        })
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

    Tutorial.find(condition)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tutorials.'
            })
        })
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({  message: `Tutorial with id ${id} not found`})
            } else { res.status(200).send(data) }
        })
        .catch(err => {
            res
                .status(500)
                .send({message: err.message || `Error retrieving tutorial with id ${id}`})
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Data to update cannot be empty'
        })
    }

    const id = req.params.id;
    const data = req.body;

    Tutorial.findByIdAndUpdate(id, data, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update tutorial with id ${id}. Maybe tutorial not found.`
                })
            } else res.status(200).send({ message: 'Tutorial updated' })
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating tutorial with id ${id}`
            })
        })
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Problem deleting tutorial with id ${id}. Maybe tutorial not found.`
                })
            } else {
                res.status(200).send({
                    message: `Tutorial deleted`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Cannot delete tutorial with id ${id}`
            })
        })
};

exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
        .then(data => {
            res.status(200).send({
                message: `${data.deletedCount} tutorials deleted`
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while deleting all tutorials'
            })
        })
};

exports.findAllPublished = (req, res) => {
    Tutorial.find({ published: true })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tutorials.'
            })
        })
};
