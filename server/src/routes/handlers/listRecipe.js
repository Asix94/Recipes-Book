const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { params: { id } } = req
    logic.listRecipe(id)
        .then(recipe => res.json(success(recipe)))
        .catch(err => res.json(fail(err)))
}