export interface PsInitializeTransactionRequestModel {
    amount: string;
    email: string;
    currency?: string;
    reference?: string;
    callback_url?: string;
    plan?: string;
    invoice_limit?: number;
    metadata?: string;
    channels?: Array<PsInitializeTransactionChannelsModel>;
}

export type PsInitializeTransactionChannelsModel =
    | 'card'
    | 'bank'
    | 'ussd'
    | 'qr'
    | 'mobile_money'
    | 'bank_transfer'
    | 'eft';
