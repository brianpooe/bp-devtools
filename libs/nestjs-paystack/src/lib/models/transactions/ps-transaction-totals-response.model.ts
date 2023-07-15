import { PsBaseModel } from '../common/ps-base.model';

export interface PsTransactionTotalsResponseModel extends PsBaseModel {
  data: PsTransactionTotalsResponseDataModel;
}

export interface PsTransactionTotalsResponseDataModel {
  total_transactions: number;
  unique_customers: number;
  total_volume: number;
  total_volume_by_currency?:
    | PsTotalVolumeByCurrencyOrPendingTransfersByCurrencyModel[]
    | null;
  pending_transfers: number;
  pending_transfers_by_currency?:
    | PsTotalVolumeByCurrencyOrPendingTransfersByCurrencyModel[]
    | null;
}

export interface PsTotalVolumeByCurrencyOrPendingTransfersByCurrencyModel {
  currency: string;
  amount: number;
}
