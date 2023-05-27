import { NsPaystackBaseModel } from './ns-paystack-base.model';

export interface InitializeTransactionResponseModel
    extends NsPaystackBaseModel {
    data: InitializeTransactionData;
}

export interface InitializeTransactionData {
    authorization_url: string;
    access_code: string;
    reference: string;
}
