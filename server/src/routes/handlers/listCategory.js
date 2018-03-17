const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    logic.listCategory()
        .then(categories => res.json(success(categories)))
        .catch(err => res.json(fail(err)))
}