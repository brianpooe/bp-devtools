import { PsAuthorizationModel, PsBaseModel, PsCustomerModel } from '../index';

export interface PsPartialDebitResponseModel extends PsBaseModel {
  data: PsPartialDebitResponseDataModel;
}

export interface PsPartialDebitResponseDataModel {
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
  plan: number;
  requested_amount: number;
  id: number;
}
