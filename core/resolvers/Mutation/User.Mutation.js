export default {
  Mutation: {
    async post(_, args, context, info) {
      return context.prisma.createUser(args)
    }
  }
}
