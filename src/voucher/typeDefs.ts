import { gql } from 'apollo-server-core'
/**
 * https://my.sevdesk.de/api/ReceiptAPI/doc.html#tag/Voucher
 *
 */

export const typeDefs = gql`
  type Voucher {
    id: Int
    objectName: String
    create: DateTime
    update: String
    voucherDate: String
    supplierName: String
    description: String
    document: String
    resultDisdar: String @deprecated
    documentPreview: String @deprecated
    payDate: String
    status: Int
    sumNet: Int
    sumTax: Int
    sumGross: Int
    sumNetAccounting: Int
    sumTaxAccounting: Int
    sumGrossAccounting: Int
    sumDiscounts: Int
    sumDiscountsForeignCurrency: Int
    showNet: String
    paidAmount: Float
    taxType: String
    creditDebit: String
    hidden: String @deprecated
    costCentre: String
    voucherType: String
    recurringIntervall: String
    recurringStartDate: String
    recurringNextVoucher: String
    recurringLastVoucher: String
    recurringEndDate: String
    enshrined: String
    inSource: String @deprecated
    taxSet: String
    iban: String @deprecated
    accountingSpecialCase: String @deprecated
    paymentDeadline: String
    tip: String @deprecated
    mileageRate: String @deprecated
    selectedForPaymentFile: String @deprecated
    supplierNameAtSave: String @deprecated
    taxmaroStockAccount: String @deprecated
    vatNumber: String @deprecated
    deliveryDate: String
    deliveryDateUntil: String
  }

  extend type Query {
    voucher(id: String): Voucher
    listVouchers: [Voucher]
  }

  extend type Mutation {
    createVoucher(voucher: CreateVoucherInput): Voucher
    uploadVoucher: Voucher
    updateVoucher: Voucher
    bookVoucher: Voucher
  }

  input Supplier {
    id: Int
    objectName: String
  }

  input CreateVoucherInput {
    voucherDate: String
    supplierName: String
    description: String
    document: String
    resultDisdar: String
    documentPreview: String
    payDate: String
    status: Int
    showNet: String
    taxType: String
    creditDebit: String
    hidden: String
    costCentre: String
    voucherType: String
    recurringIntervall: String
    recurringStartDate: String
    recurringNextVoucher: String
    recurringLastVoucher: String
    recurringEndDate: String
    enshrined: String
    inSource: String
    taxSet: String
    iban: String
    accountingSpecialCase: String
    paymentDeadline: String
    tip: String
    mileageRate: String
    selectedForPaymentFile: String
    supplierNameAtSave: String
    taxmaroStockAccount: String
    vatNumber: String
    deliveryDate: String
    deliveryDateUntil: String
    mapAll: String
    objectName: String
    supplier: Supplier
  }

  input UploadVoucherInput {
    file: Upload
  }
`
