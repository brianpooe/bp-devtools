export interface PsValidateAccountRequestModel {
  bank_code: string;
  country_code: string;
  account_number: string;
  account_name: string;
  account_type: string;
  document_type: string;
  document_number: string;
}
