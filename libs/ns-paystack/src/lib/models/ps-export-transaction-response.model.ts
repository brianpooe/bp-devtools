export interface PsExportTransactionResponseModel {
  data: PsExportTransactionResponseDataModel;
}

export interface PsExportTransactionResponseDataModel {
  path: string;
  expiresAt: string;
}
