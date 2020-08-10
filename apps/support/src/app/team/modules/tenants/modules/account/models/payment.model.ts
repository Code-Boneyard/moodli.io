export interface Payment {
    paymentId: number;
    clientId: number;
    description: string;
    invoiceDate: string;
    paymentDue: string;
    amountDue: number;
  }