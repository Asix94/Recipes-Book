const success = data => ({status: 'OK', ...data})
const fail = err => ({status: 'KO', ...err})

module.exports = { success, fail }