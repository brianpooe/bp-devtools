export interface InitializeTransactionRequestModel {
    amount: string;
    email: string;
    currency: string;
    reference: string;
    callback_url: string;
    plan: string;
    invoice_limit: number;
    metadata: string;
    channels: Array<Channels>;
}

export type Channels =
    | 'card'
    | 'bank'
    | 'ussd'
    | 'qr'
    | 'mobile_money'
    | 'bank_transfer'
    | 'eft';
