const express = require('express')
// const {  buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('../schema/schema.js')
const rootValue = {
    language: () => 'GraphQL'
  }
const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    rootValue, schema, graphiql: true
  }))
  app.listen(4000, () => console.log('Listening on 4000'))