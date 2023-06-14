import { PsBaseModel } from './ps-base.model';

export interface PsExportTransactionResponseModel extends PsBaseModel {
  data: PsExportTransactionResponseDataModel;
}

export interface PsExportTransactionResponseDataModel {
  path: string;
  expiresAt: string;
}
