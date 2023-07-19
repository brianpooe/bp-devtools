import { PsBaseModel } from '../common';

export interface PsResolveAccountResponseModel extends PsBaseModel {
  data: PsResolveAccountResponseDataModel;
}

export interface PsResolveAccountResponseDataModel {
  account_number: string;
  account_name: string;
}
