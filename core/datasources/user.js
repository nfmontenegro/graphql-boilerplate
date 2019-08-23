import {DataSource} from 'apollo-datasource'

class UserAPI extends DataSource {
  constructor({store}) {
    super()
    this.store = store
  }

  initialize(config) {
    this.context = config.context
  }

  async findUser({email: emailArg}) {
    console.log('Store', this.store.users)
    const user = await this.store.users.findUser({
      where: {
        email: emailArg
      }
    })
    console.log('User:', user)
    return user
  }

  async findAll() {
    return await this.store.users.findAll()
  }
}

export default UserAPI
