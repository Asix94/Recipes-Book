const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    const { body: {title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation} } = req
    const { params: { id } } = req
    
    logic.updateRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
} 