export interface PsListTransactionsQueryParamModel {
    perPage: number;
    page: number;
    customer?: number;
    terminalid?: string;
    status?: string;
    from?: string;
    to?: string;
    amount?: number;
}
