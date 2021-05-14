import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type Invoice {
    invoiceNumber: String
    invoiceDate: String
    header: String
    headText: String
    footText: String
    timeToPay: String
    discountTime: String
    discount: Int
    addressName: String
    addressStreet: String
    addressZip: String
    addressCity: String
    addressCountry: String
    payDate: String
    deliveryDate: String
    status: Int
    smallSettlement: Int
    taxRate: Int
    taxText: String
    dunningLevel: String
    addressParentName: String
    addressContactRef: String
    taxType: String
    paymentMethod: String
    costCentre: String
    sendDate: String
    origin: String
    invoiceType: String
    accountIntervall: String
    accountLastInvoice: String
    accountNextInvoice: String
    reminderTotal: String
    reminderDebit: String
    reminderDeadline: String
    reminderCharge: String
    taxSet: String
    address: String
    currency: String
    entryType: String
    customerInternalNote: String
    showNet: String
    enshrined: String
    sendType: String
    deliveryDateUntil: String
    datevConnectOnline: String
    sendPaymentReceivedNotificationDate: String
    mapAll: String
    objectName: String
  }

  extend type Query {
    listInvoices: [Invoice]
    invoice(id: String): Invoice
    getPartiallyIsPaidInvoice: Invoice
  }

  extend type Mutation {
    createInvoice(input: CreateInvoiceInput): Invoice
    markInvoiceAsSend(id: String): Invoice
    bookInvoice(id: String): Invoice
    cancelInvoice(id: String): Invoice
  }

  input CreateInvoiceInput {
    invoiceNumber: String
    invoiceDate: String
    header: String
    headText: String
    footText: String
    timeToPay: String
    discountTime: String
    discount: Int
    addressName: String
    addressStreet: String
    addressZip: String
    addressCity: String
    addressCountry: String
    payDate: String
    deliveryDate: String
    status: Int
    smallSettlement: Int
    taxRate: Int
    taxText: String
    dunningLevel: String
    addressParentName: String
    addressContactRef: String
    taxType: String
    paymentMethod: String
    costCentre: String
    sendDate: String
    origin: String
    invoiceType: String
    accountIntervall: String
    accountLastInvoice: String
    accountNextInvoice: String
    reminderTotal: String
    reminderDebit: String
    reminderDeadline: String
    reminderCharge: String
    taxSet: String
    address: String
    currency: String
    entryType: String
    customerInternalNote: String
    showNet: String
    enshrined: String
    sendType: String
    deliveryDateUntil: String
    datevConnectOnline: String
    sendPaymentReceivedNotificationDate: String
    mapAll: String
    objectName: String
    contactPerson: ContactPerson
    contact: Contact
  }
`
