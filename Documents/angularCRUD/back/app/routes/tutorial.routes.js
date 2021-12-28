module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller');
    const router = require('express').Router();

    //new Tuto
    router.post('/', tutorials.create);
    //retrieve all Tutos
    router.get('/', tutorials.findAll);
    //retrieve all published Tutos
    router.get('/published', tutorials.findAllPublished);
    //retrieve one tuto by id
    router.get('/:id', tutorials.findOne)
    //update a tuto with id
    router.put('/:id', tutorials.update)
    //delete one tuto
    router.delete('/:id', tutorials.delete);
    //delete all tutos
    router.delete('/', tutorials.deleteAll);
    
    app.use('/api/tutorials', router);
}