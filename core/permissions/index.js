import {rule, shield} from 'graphql-shield'
import {getUserId} from '../utils'

const rules = {
  isAuthenticatedUser: rule()((_, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isPostOwner: rule()(async (_, {id}, context) => {
    const userId = getUserId(context)
    const author = await context.prisma
      .post({
        id
      })
      .author()
    return userId === author.id
  })
}

const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    users: rules.isAuthenticatedUser
  },
  Mutation: {}
})

export {permissions}
