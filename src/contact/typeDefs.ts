import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type SevClient {
    id: Int
    objectName: String
  }

  type Category {
    id: Int
    objectName: String
  }

  type Contact {
    id: Int
    objectName: String
    create: String
    update: String
    name: String
    customerNumber: String
    parent: String
    surename: String
    familyname: String
    titel: String
    description: String
    academicTitle: String
    gender: String
    name2: String
    birthday: String
    vatNumber: String
    bankAccount: String
    bankNumber: String
    defaultCashbackTime: String
    defaultCashbackPercent: String
    defaultTimeToPay: String
    taxNumber: String
    taxOffice: String
    exemptVat: String
    taxType: String
    taxSet: String
    defaultDiscountAmount: String
    defaultDiscountPercentage: String
    sevClient: SevClient
    category: Category
  }

  extend type Query {
    contact(id: String): Contact
    listContact: [Contact]
  }

  extend type Mutation {
    createContact(input: CreateContactInput): Contact
    updateContact(input: UpdateContactInput): Contact
    deleteContact: Contact
  }

  input CategoryInput {
    id: Int
  }

  input CreateContactInput {
    name: String
    customerNumber: String
    parent: String
    surename: String
    familyname: String
    titel: String
    description: String
    academicTitle: String
    gender: String
    name2: String
    birthday: String
    vatNumber: String
    bankAccount: String
    bankNumber: String
    defaultCashbackTime: String
    defaultCashbackPercent: String
    defaultTimeToPay: String
    taxNumber: String
    taxOffice: String
    exemptVat: String
    taxType: String
    taxSet: String
    defaultDiscountAmount: String
    defaultDiscountPercentage: String
    category: CategoryInput
  }

  input UpdateContactInput {
    name: String
    customerNumber: String
    parent: String
    surename: String
    familyname: String
    titel: String
    description: String
    academicTitle: String
    gender: String
    name2: String
    birthday: String
    vatNumber: String
    bankAccount: String
    bankNumber: String
    defaultCashbackTime: String
    defaultCashbackPercent: String
    defaultTimeToPay: String
    taxNumber: String
    taxOffice: String
    exemptVat: String
    taxType: String
    taxSet: String
    defaultDiscountAmount: String
    defaultDiscountPercentage: String
    category: CategoryInput
  }
`
