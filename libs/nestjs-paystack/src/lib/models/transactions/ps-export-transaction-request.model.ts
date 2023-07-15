export interface PsExportTransactionRequestModel {
  perPage: number;
  page: number;
  from?: string;
  to?: string;
  customer?: number;
  status?: string;
  currency?: string;
  amount?: number;
  settled?: boolean;
  settlement?: number;
  payment_page?: number;
}
