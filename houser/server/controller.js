module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');

        db.get_houses()
            .then(resp => {
                res.status(200).send(resp)
            })
    },

    createSomething: function (req, res) {
        const db = req.app.get('db');
        const { name, address, city, state, zipcode } = req.body;

        db.create_something([name, address, city, state, zipcode])
            .then(resp => {
                res.status(200).send(resp);
            })
        
    },

    updateSomething: function (req, res) {
        const db = req.app.get('db');
        const {id} = req.params
        const {name, address, city, state, zipcode} = req.body
        // const {
        //     params: { id },
        //     body: {
        //         name,
        //         address,
        //         city,
        //         state,
        //         zipcode
        //     },
        // } = req;

        db.update_something([name, address, city, state, zipcode, id])
            .then(resp => {
                res.status(200).send(resp);
            })
    },

    deleteSomething: function (req, res) {
        const db = req.app.get('db');
        const {id} = req.params
        const {name, address, city, state, zipcode} = req.body

        db.delete_something([name, address, city, state, zipcode, id])
            .then(resp => {
                res.status(200).send(resp);
            })
    }
}