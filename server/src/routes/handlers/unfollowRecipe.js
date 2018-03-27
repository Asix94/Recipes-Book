const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    
    const {id} = req.tokencito
    const {params:{idRecipe}} = req

    logic.unfollowRecipe(idRecipe,id)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}