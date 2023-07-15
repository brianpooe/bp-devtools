import { PsBaseModel } from '../';

export interface PsFetchSplitResponseModel extends PsBaseModel {
  data: PsFetchSplitResponseDataModel;
}

export interface PsFetchSplitResponseDataModel {
  id: number;
  name: string;
  split_code: string;
  integration: number;
  domain: string;
  type: string;
  active: number;
  currency: string;
  bearer_type: string;
  bearer_subaccount: number;
  created_at: string;
  updated_at: string;
  subaccounts?: SubaccountsEntity[] | null;
  total_subaccounts: number;
}

export interface SubaccountsEntity {
  subaccount: Subaccount;
  share: number;
}

export interface Subaccount {
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
