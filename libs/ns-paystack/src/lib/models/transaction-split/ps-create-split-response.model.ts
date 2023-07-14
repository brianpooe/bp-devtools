import { PsBaseModel, PsSubaccountsEntityModel } from '../';

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
  subaccounts?: PsSubaccountsEntityModel[] | null;
  total_subaccounts: number;
}
