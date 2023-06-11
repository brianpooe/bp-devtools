import { PsChannelsModel } from './ps-channels.model';

export interface PsChargeTransactionRequestModel {
  amount: string;
  email: string;
  authorization_code: string;
  reference?: string;
  currency: string;
  metadata?: string;
  channels?: Array<PsChannelsModel>;
  subaccount: string;
  transaction_charge: number;
  bearer: string;
  queue: boolean;
}
