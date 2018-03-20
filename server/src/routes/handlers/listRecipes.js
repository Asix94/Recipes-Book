const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    logic.listRecipes()
        .then(recipes => res.json(success(recipes)))
        .catch(err => res.json(fail(err)))
}