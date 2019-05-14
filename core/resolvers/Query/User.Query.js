export default {
  Query: {
    async user(_, {id}, {prisma}, info) {
      const user = await prisma.user({id})
      return user
    }
  }
}
