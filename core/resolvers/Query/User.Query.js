import {getUserId} from '../../utils'

export default {
  Query: {
    me: (_, args, context, info) => {
      const userId = getUserId(context)
      return context.prisma.user({id: userId})
    },
    users: (_, args, {prisma}, info) => {
      return prisma.users()
    }
  }
}
