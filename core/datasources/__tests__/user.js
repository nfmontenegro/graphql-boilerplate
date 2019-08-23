import UserAPI from '../user'

const mockStore = {
  users: {
    findUser: jest.fn(),
    findAll: jest.fn()
  }
}

const dataSource = new UserAPI({store: mockStore})
dataSource.initialize({context: {user: {id: 1, email: 'a@a.a'}}})

test('simple test', async () => {
  const response = await dataSource.findUser({email: 'a222@a.a'})
  console.log('Response:', response)
})
