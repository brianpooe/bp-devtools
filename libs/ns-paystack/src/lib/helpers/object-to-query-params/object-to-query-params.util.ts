import { PsListTransactionsQueryParamModel } from '../../models';

export const objectToQueryParams = (
    queryParamsPayload: PsListTransactionsQueryParamModel
): string => {
    const queryParams = Object.entries(queryParamsPayload).map(
        ([key, value]) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(value);
            return `${encodedKey}=${encodedValue}`;
        }
    );

    return queryParams.join('&');
};
