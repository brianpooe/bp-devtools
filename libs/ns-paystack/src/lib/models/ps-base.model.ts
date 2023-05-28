export interface PsBaseModel {
    status: boolean;
    message: string;
    meta?: PsBaseModelMeta;
}

export interface PsBaseModelMeta {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
}
