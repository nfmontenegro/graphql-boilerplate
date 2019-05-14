import {GraphQLServer} from 'graphql-yoga'

import {default as resolvers} from './resolvers'

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
