import {GraphQLServer} from 'graphql-yoga'

import {permissions} from './permissions'
import {prisma} from '../generated/prisma-client'
import {default as resolvers} from './resolvers'

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: req => ({
    ...req,
    prisma
  })
})

server.start(() => console.log('Server is running on localhost:4000'))
