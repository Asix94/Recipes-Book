const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const {params:{query}} = req
    logic.searchRecipes(query)
        .then(search => res.json(success(search)))
        .catch(err => res.json(fail(err)))
}