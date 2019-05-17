import bcrypt from 'bcrypt'
import {argumentsObjectFromField} from 'apollo-utilities'

export default {
  Mutation: {
    async post(_, {password, ...args}, {prisma}, info) {
      const SALT_ROUND = 10
      const hashedPassword = await bcrypt.hash(password, SALT_ROUND)

      const user = await prisma.users({where: {email: args.email}})

      if (user.length > 0) throw new Error('User exist')

      return prisma.createUser({
        ...args,
        password: hashedPassword
      })
    }
  }
}
