import { PsChannelsModel } from '../common/ps-channels.model';

export interface PsInitializeTransactionRequestModel {
  amount: string;
  email: string;
  currency?: string;
  reference?: string;
  callback_url?: string;
  plan?: string;
  invoice_limit?: number;
  metadata?: string;
  channels?: Array<PsChannelsModel>;
}
