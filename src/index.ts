import { gql, Config, IResolvers } from 'apollo-server-micro'
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers
} from 'graphql-scalars'
import merge from 'lodash/merge'
import { typeDefs as File } from '../File'
import { SevdeskDataSource } from './dataSource'
import {
  resolvers as contactResolvers,
  typeDefs as contactTypeDefs
} from './contact'
import {
  resolvers as voucherResolvers,
  typeDefs as voucherTypeDefs
} from './voucher'

/**
 *
 * https://my.sevdesk.de/swaggerUI/index.html#/VatReport
 */

export const dataSources: Config['dataSources'] = () => ({
  sevdesk: new SevdeskDataSource()
})

export const resolvers: IResolvers = merge(
  {},
  scalarResolvers,
  contactResolvers,
  voucherResolvers
)

export const typeDefs = gql`
  ${File}
  ${scalarTypeDefs}
  ${contactTypeDefs}
  ${voucherTypeDefs}
`
