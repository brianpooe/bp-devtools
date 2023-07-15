import { PsBaseModel } from '../';

export interface PsCreateSplitResponseModel extends PsBaseModel {
  data: PsCreateSplitResponseDataModel;
}
export interface PsCreateSplitResponseDataModel {
  id: number;
  name: string;
  type: string;
  currency: string;
  integration: number;
  domain: string;
  split_code: string;
  active: boolean;
  bearer_type: string;
  bearer_subaccount: number;
  createdAt: string;
  updatedAt: string;
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
