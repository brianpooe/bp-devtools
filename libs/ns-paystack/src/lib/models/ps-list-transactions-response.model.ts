import {
  PsBaseModel,
  PsCustomerModel,
  PsAuthorizationModel,
  PsLogModel,
  PsMetadataModel
} from './';

export interface PsListTransactionsResponseModel extends PsBaseModel {
  data?: PsListTransactionsResponseDataModel[] | null;
}

export interface PsListTransactionsResponseDataModel {
  id: number;
  domain: string;
  status: string;
  reference: string;
  amount: number;
  message?: null;
  gateway_response: string;
  paid_at?: null;
  created_at: string;
  channel: string;
  currency: string;
  ip_address?: null;
  metadata?: PsMetadataModel | null;
  timeline?: null;
  customer: PsCustomerModel;
  authorization: PsAuthorizationModel;
  plan?: unknown | null;
  requested_amount: number;
  log?: PsLogModel;
  fees?: null;
  paidAt?: string | null;
  createdAt?: string | null;
}
