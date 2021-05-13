import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class SevdeskDataSource extends RESTDataSource {
  private token: string
  constructor(token: string = process.env.SEVDESK_TOKEN as string) {
    super()
    this.token = token
  }

  baseURL = 'https://my.sevdesk.de/api/v1/'
  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.token)
  }

  /** https://my.sevdesk.de/api/ReceiptAPI/doc.html#tag/Voucher */
  async getVoucher(id: string) {
    return this.get(`Voucher/${id}`)
  }
  async listVouchers() {
    const data = await this.get(`Voucher`)
    return data
  }

  async createVoucher() {
    return this.post('Voucher/Factory/saveVoucher')
  }

  async uploadVoucherFile() {
    return this.post('Voucher/Factory/uploadTempFile')
  }

  /** https://my.sevdesk.de/api/ReceiptAPI/doc.html#tag/VoucherPos */
  async getVoucherPosition() {
    return this.get('VoucherPos')
  }

  /** */
  async getOrder(orderId: string) {
    return this.get(`Order/${orderId}`)
  }

  async listOrders() {
    return this.get('Order')
  }

  /** https://my.sevdesk.de/api/OrderAPI/doc.html#operation/createOrder */
  async createOrder() {
    return this.post('Order')
  }

  async updateOrder() {
    return this.put('Order')
  }

  async deleteOrder(orderId: string) {
    return this.delete(`Order/${orderId}/delete`)
  }

  async getOrderPositions() {
    return this.get('OrderPos')
  }

  async createOrderPosition() {
    return this.post('OrderPos')
  }

  /**
   *
   */
  async listContacts() {
    return this.get('Contact')
  }

  /** https://my.sevdesk.de/api/ContactAPI/doc.html#tag/ContactAddress */
  async createContactAddress(data: {
    contact: { id: number; objectName: 'Contact' }
    street: string
    zip: string
    city: string
    country: { id: 0; objectName: 'StaticCountry' }
    category?: { id: string | number }
    name: string
    name2?: string
    name3?: string
    name4?: string
  }) {
    const { objects = [] } = await this.post('ContactAddress', {
      body: JSON.stringify({ ...data })
    })
    return objects[0] ?? null
  }

  /** */
  async getCommunicationWays() {
    return this.get('CommunicationWay')
  }

  async createCommunicationWay() {
    return this.post('CommunicationWay')
  }

  async deleteCommunicationWay(communicationWayId: string) {
    return this.delete(`CommunicationWay/${communicationWayId}/delete`)
  }

  /** */
  async createAccountingContact() {
    return this.post('AccountingContact')
  }
}
