require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const { success, fail } = require('./routes/handlers/api-utils.js')
const Recipe = require('./models/Recipe.js')
 
const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

mongoose.connect(`mongodb://${host}:${port}/${database}`)
    .then(() => {

        const app = express()
        const router = express.Router()

        app.use('/api', router)
        app.use(cors())
      
        router.get('/recipes', (req,res) => {

            Recipe.find({})
                .then(recipes => res.json(success(recipes)))
                .catch(err => res.json(fail(err)))
        })

        const port = process.env.PORT

        app.listen(port, () => console.log(`this server is connect in port ${port}`))

    })
    .catch(err => {
        console.error('App started error:',err.stack);
        process.exit(1);
    })