export interface Invoice {
  invoiceId: number;
  subscriptionId: number;
  clientId: number;
  description: string;
  invoiceDate: string;
  paymentDue: string;
  amountDue: number;
}
