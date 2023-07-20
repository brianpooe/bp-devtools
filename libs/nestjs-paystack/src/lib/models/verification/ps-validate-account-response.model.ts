import { PsBaseModel } from '../../models';

export interface PsValidateAccountResponseModel extends PsBaseModel {
  data: PsValidateAccountRequestDataModel;
}

export interface PsValidateAccountRequestDataModel {
  verified: boolean;
  verificationMessage: string;
}
