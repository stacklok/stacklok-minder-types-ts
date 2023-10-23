/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1GetBranchProtectionResponse } from '../models/v1GetBranchProtectionResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BranchProtectionServiceService {

    /**
     * @returns v1GetBranchProtectionResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static branchProtectionServiceGetBranchProtection(): CancelablePromise<v1GetBranchProtectionResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/branchprotection',
        });
    }

}
