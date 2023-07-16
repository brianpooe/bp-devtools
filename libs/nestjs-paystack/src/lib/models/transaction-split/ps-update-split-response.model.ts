import { PsBaseModel, PsSubaccountsEntityModel } from '../common';

export interface PsUpdateSplitResponseModel extends PsBaseModel {
  data: PsUpdateSplitResponseDataModel;
}

export interface PsUpdateSplitResponseDataModel {
  id: number;
  name: string;
  type: string;
  currency: string;
  integration: number;
  domain: string;
  split_code: string;
  active: boolean;
  bearer_type: string;
  bearer_subaccount?: null;
  createdAt: string;
  updatedAt: string;
  subaccounts?: PsSubaccountsEntityModel[] | null;
  total_subaccounts: number;
}
