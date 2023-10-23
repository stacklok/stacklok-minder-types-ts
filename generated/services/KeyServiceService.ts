/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1CreateKeyPairRequest } from '../models/v1CreateKeyPairRequest';
import type { v1CreateKeyPairResponse } from '../models/v1CreateKeyPairResponse';
import type { v1GetPublicKeyResponse } from '../models/v1GetPublicKeyResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KeyServiceService {

    /**
     * @param keyIdentifier
     * @returns v1GetPublicKeyResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static keyServiceGetPublicKey(
        keyIdentifier?: string,
    ): CancelablePromise<v1GetPublicKeyResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/key',
            query: {
                'keyIdentifier': keyIdentifier,
            },
        });
    }

    /**
     * @param body
     * @returns v1CreateKeyPairResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static keyServiceCreateKeyPair(
        body: v1CreateKeyPairRequest,
    ): CancelablePromise<v1CreateKeyPairResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/key',
            body: body,
        });
    }

}
