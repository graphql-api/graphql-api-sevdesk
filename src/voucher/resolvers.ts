import { IResolvers } from '../types'

export const resolvers: IResolvers = {
  Query: {
    async voucher(root, args, context, info) {},
    async listVouchers(root, args, { dataSources }, info) {
      const { objects } = await dataSources.sevdesk.listVouchers()
      return objects
    }
  },
  Mutation: {
    async createVoucher() {},
    async uploadVoucher() {},
    async updateVoucher() {},
    async bookVoucher() {}
  }
}
