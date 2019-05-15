export default {
  Mutation: {
    async post(_, args, {prisma}, info) {
      return prisma.createUser({
        ...args
      })
    }
  }
}
