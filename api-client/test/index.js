require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {

    it('should listUsers', done => {
        api.listUsers()
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert(res.data && res.data.length > 0, 'should results data array')

                done()
            })
            .catch(done)
    })

    it('should listRecipes', done => {
        api.listRecipes()
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert(res.data && res.data.length > 0, 'should results data array')

                done()
            })
            .catch(done)
    })

    it('should listRecipe', done => {
        api.listRecipe('5aaae4dca8d0fb23644f8db5')
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert.equal(res.data._id, '5aaae4dca8d0fb23644f8db5')

                assert(res.data, 'should results data array')

                done()
            })
            .catch(done)
    })

    it('should listCategories', done => {
        api.listCategories()
            .then(res => {
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert(res.data && res.data.length > 0, 'should results data array')

                done()
            })
            .catch(done)
    })

    it('should listTopics', done => {
        api.listTopics()
            .then(res =>{
                assert.equal(res.status, 'OK', `results should be ok but got errors ${res.error}`)

                assert(res.data && res.data.length > 0, 'should results data array')

                done()
            })
            .catch(done)
    })
})