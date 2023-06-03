import { PsBaseModel, PsHistoryModel } from './';

export interface PsViewTransactionTimeLineResponseModel extends PsBaseModel {
    data: PsViewTransactionTimeLineDataModel;
}

export interface PsViewTransactionTimeLineDataModel {
    time_spent: number;
    attempts: number;
    authentication?: null;
    errors: number;
    success: boolean;
    mobile: boolean;
    input?: null[] | null;
    channel: string;
    history?: PsHistoryModel[];
}
