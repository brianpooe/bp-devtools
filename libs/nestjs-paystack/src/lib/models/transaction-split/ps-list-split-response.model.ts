import { PsBaseModel, SubaccountsEntity } from '../';

export interface PsListSplitResponseModel extends PsBaseModel {
  data: PsListSplitResponseDataModel[];
}

export interface PsListSplitResponseDataModel {
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
