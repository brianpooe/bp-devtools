import { PsChannelsModel } from './ps-channels.model';

export interface PsAuthorizationModel {
  authorization_code?: string | null;
  bin?: string | null;
  last4?: string | null;
  exp_month?: string | null;
  exp_year?: string | null;
  channel?: PsChannelsModel;
  card_type?: string | null;
  bank?: string | null;
  country_code?: string | null;
  brand?: string | null;
  reusable?: boolean;
  signature?: string | null;
  account_name?: string | null;
}
