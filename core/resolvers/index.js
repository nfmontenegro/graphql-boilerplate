import {mergeResolvers} from 'merge-graphql-schemas'

import UserQuery from './Query/User.Query.js'
import UserMutation from './Mutation/User.Mutation'

const resolversArray = [UserQuery, UserMutation]

const resolvers = mergeResolvers(resolversArray)

export default resolvers
