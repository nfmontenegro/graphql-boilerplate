import dotenv from 'dotenv'
import {GraphQLServer} from 'graphql-yoga'

import {default as resolvers} from './resolvers'

const {prisma} = require('./generated/prisma-client')

dotenv.config()

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
})

server.start(() => console.log('Server is running on localhost:4000'))
