exports.post = (req, res, next) => {
 res.status(200).send('Rota de post');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota de put --- ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota de delete --- ${id}`);
};

exports.get = (req, res, next) => {
    res.status(200).send('Rota de get');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota de getById --- ${id}`);
}