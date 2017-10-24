const resolvers = {
  Query: {
    echo: (_, { message }, context) => {
      return message
    }
  }
}

export default resolvers
