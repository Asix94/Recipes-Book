const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    logic.listCategories()
        .then(categories => res.json(success(categories)))
        .catch(err => res.json(fail(err)))
}