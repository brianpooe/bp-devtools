import { PsBaseModel } from '../common/ps-base.model';

export interface PsInitializeTransactionResponseModel extends PsBaseModel {
  data: PsInitializeTransactionResponseDataModel;
}

export interface PsInitializeTransactionResponseDataModel {
  authorization_url: string;
  access_code: string;
  reference: string;
}
