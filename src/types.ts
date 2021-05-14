import { GraphQLResolverMap } from 'apollo-graphql'
import { SevdeskDataSource } from './dataSource'

export type IResolvers = GraphQLResolverMap<{
  dataSources: { sevdesk: SevdeskDataSource }
}>
