import {mergeResolvers} from 'merge-graphql-schemas'
import UserQuery from './Query/User.Query.js'
// import UserMutation from './Mutations/User.Mutation'

const resolversArray = [UserQuery]

const resolvers = mergeResolvers(resolversArray)

export default resolvers
