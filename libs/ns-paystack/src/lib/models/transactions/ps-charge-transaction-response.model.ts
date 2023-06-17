import { PsAuthorizationModel, PsBaseModel, PsCustomerModel } from '../index';

export interface PsChargeTransactionResponseModel extends PsBaseModel {
  data: PsChargeTransactionResponseDataModel;
}

export interface PsChargeTransactionResponseDataModel {
  amount: number;
  currency: string;
  transaction_date: string;
  status: string;
  reference: string;
  domain: string;
  metadata: string;
  gateway_response: string;
  message?: null;
  channel: string;
  ip_address?: null;
  log?: null;
  fees: number;
  authorization: PsAuthorizationModel;
  customer: PsCustomerModel;
  plan?: null;
  id: number;
}
