module.exports = {

    create: (req, res, next) => { 
        const dbInstance = req.app.get('db');
        const {name, price, image_url} = req.body;

        dbInstance.create_product([name, price, image_url])
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong!'})
        });
    },


    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
            });
    }
};