const TimeController = require('../Controllers/TimeController');
module.exports = (app) => {
    app.post('/time', TimeController.post);
    app.put('/time/:id', TimeController.put);
    app.delete('/time/:id', TimeController.delete);
    app.get('/time', TimeController.get);
    app.get('/time/:id', TimeController.getById);
}
