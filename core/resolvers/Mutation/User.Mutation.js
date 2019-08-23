const {hash, compare} = require('bcrypt')
import {sign} from 'jsonwebtoken'

import {APP_SECRET} from '../../utils'

export default {
  Mutation: {
    signup: async (_, {name, lastname, email, password}, {prisma}) => {
      const hashedPassword = await hash(password, 10)
      const hadUser = await prisma.user({email})

      if (hadUser) throw new Error('User exist')

      const user = await prisma.createUser({
        name,
        lastname,
        email,
        password: hashedPassword
      })
      return {
        token: sign({userId: user.id}, APP_SECRET),
        user
      }
    },
    async login(_, {email, password}, {prisma}, info) {
      const user = await prisma.user({email})
      if (!user) {
        throw new Error('No such user found')
      }

      const valid = await compare(password, user.password)
      if (!valid) {
        throw new Error('Invalid password')
      }

      return {
        token: sign({userId: user.id}, APP_SECRET),
        user
      }
    },
    async updateUser(_, args, {prisma}, info) {
      console.log('ARgs:!!', args)
      const {id, ...user} = args
      await prisma.updateUser({
        data: user,
        where: {
          id
        }
      })

      return 'Usuario actualizado!'
    }
  }
}
