const { success, fail } = require('../handlers/api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: {title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation} } = req
    logic.createRecipe(title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}