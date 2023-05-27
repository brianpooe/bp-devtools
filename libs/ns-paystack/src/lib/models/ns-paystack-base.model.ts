export interface NsPaystackBaseModel {
    status: boolean;
    message: string;
    meta?: NsPaystackMeta;
}

export interface NsPaystackMeta {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
}
