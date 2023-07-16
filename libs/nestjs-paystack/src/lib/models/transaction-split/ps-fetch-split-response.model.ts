import { PsBaseModel, PsSubaccountsEntityModel } from '../';

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
  subaccounts?: PsSubaccountsEntityModel[] | null;
  total_subaccounts: number;
}
