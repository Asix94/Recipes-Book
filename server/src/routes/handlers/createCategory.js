const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { body:{name,logo,image}} = req
    logic.createCategory(name,logo,image)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}