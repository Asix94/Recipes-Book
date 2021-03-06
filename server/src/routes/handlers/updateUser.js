const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { body:{ name,surname,email,username,password } } = req
    const { params:{ id } } = req

    logic.updateUser(id,name,surname,email,username,password)
        .then( id => {
            res.json(success({ id }))
        })
        .catch( err => {
            res.json(fail(err.message))
        })
}