import { PsBaseModel } from './ps-base.model';

export interface PsInitializeTransactionResponseModel extends PsBaseModel {
    data: PsInitializeTransactionResponseData;
}

export interface PsInitializeTransactionResponseData {
    authorization_url: string;
    access_code: string;
    reference: string;
}
