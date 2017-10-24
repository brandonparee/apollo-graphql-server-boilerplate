import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(3000)
