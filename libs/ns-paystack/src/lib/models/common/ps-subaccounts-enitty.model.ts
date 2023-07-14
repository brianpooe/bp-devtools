export interface PsSubaccountsEntityModel {
  subaccount: PsSubaccountModel;
  share: number;
}

export interface PsSubaccountModel {
  id: number;
  subaccount_code: string;
  business_name: string;
  description: string;
  primary_contact_name?: null;
  primary_contact_email?: null;
  primary_contact_phone?: null;
  metadata?: null;
  percentage_charge: number;
  settlement_bank: string;
  account_number: string;
}
