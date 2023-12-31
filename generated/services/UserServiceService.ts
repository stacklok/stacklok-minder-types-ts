/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1CreateUserRequest } from '../models/v1CreateUserRequest';
import type { v1CreateUserResponse } from '../models/v1CreateUserResponse';
import type { v1DeleteUserResponse } from '../models/v1DeleteUserResponse';
import type { v1GetUserResponse } from '../models/v1GetUserResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserServiceService {

    /**
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1GetUserResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static userServiceGetUser(
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1GetUserResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/user',
            query: {
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1DeleteUserResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static userServiceDeleteUser(
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1DeleteUserResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/user',
            query: {
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param body
     * @returns v1CreateUserResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static userServiceCreateUser(
        body: v1CreateUserRequest,
    ): CancelablePromise<v1CreateUserResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/user',
            body: body,
        });
    }

}
