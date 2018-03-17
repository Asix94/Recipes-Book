const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req,res) => {
    logic.listTopic()
        .then(thopics => res.json(success(thopics)))
        .catch(err => res.json(fail(err)))
}