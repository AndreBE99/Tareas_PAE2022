const model = require('./model');

class UsersController {

    getAll(req, res) {
        const user = new model();
        user.findAll((err, results) => {
            if(err) {
                res.send([])
            } else {
                res.send(results);
            }
            
        })
    } 

    getOne(req, res) {
        res.send('llegaste al get one endpoint ' + req.params.id);
    }

}

module.exports = new UsersController();