import { GraphQLResolverMap } from 'apollo-graphql'

/** https://my.sevdesk.de/api/ContactAPI/doc.html#tag/Contact */

export const resolvers: GraphQLResolverMap = {
  Query: {
    async contact() {}
  },
  Mutation: {
    async createContact() {},
    async updateContact() {},
    async deleteContact() {}
  }
}
