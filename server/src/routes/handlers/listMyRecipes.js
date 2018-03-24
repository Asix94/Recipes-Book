const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const {id} = req.tokencito
    logic.listMyRecipes(id)
        .then(recipe => res.json(success(recipe)))
        .catch(err => res.json(fail(err)))
}