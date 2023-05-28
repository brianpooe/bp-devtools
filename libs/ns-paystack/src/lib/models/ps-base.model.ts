import { PsBaseMetaModel } from './ps-base-meta.model';

export interface PsBaseModel {
    status: boolean;
    message: string;
    meta?: PsBaseMetaModel;
}
