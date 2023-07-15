export interface PsPartialDebitRequestModel {
  authorization_code: string;
  currency: string;
  amount: string;
  email: string;
  reference?: string;
  at_least?: string;
}
