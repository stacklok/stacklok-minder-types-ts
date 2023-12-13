/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apiHttpBody } from '../models/apiHttpBody';
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1Context } from '../models/v1Context';
import type { v1ExchangeCodeForTokenWEBResponse } from '../models/v1ExchangeCodeForTokenWEBResponse';
import type { v1GetAuthorizationURLResponse } from '../models/v1GetAuthorizationURLResponse';
import type { v1StoreProviderTokenResponse } from '../models/v1StoreProviderTokenResponse';
import type { v1VerifyProviderTokenFromResponse } from '../models/v1VerifyProviderTokenFromResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OAuthServiceService {

    /**
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * protolint:disable:this
     * @param provider
     * @param projectId
     * @param code
     * @param state
     * @param redirectUri
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns apiHttpBody A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static oAuthServiceExchangeCodeForTokenCli(
        provider: string,
        projectId?: string,
        code?: string,
        state?: string,
        redirectUri?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<apiHttpBody | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/callback/{provider}/cli',
            path: {
                'provider': provider,
            },
            query: {
                'projectId': projectId,
                'code': code,
                'state': state,
                'redirectUri': redirectUri,
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param provider
     * @param projectId
     * @param code
     * @param redirectUri
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1ExchangeCodeForTokenWEBResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static oAuthServiceExchangeCodeForTokenWeb(
        provider: string,
        projectId?: string,
        code?: string,
        redirectUri?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1ExchangeCodeForTokenWEBResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/callback/{provider}/web',
            path: {
                'provider': provider,
            },
            query: {
                'projectId': projectId,
                'code': code,
                'redirectUri': redirectUri,
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param provider
     * @param projectId
     * @param cli
     * @param port
     * @param owner
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1GetAuthorizationURLResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static oAuthServiceGetAuthorizationUrl(
        provider?: string,
        projectId?: string,
        cli?: boolean,
        port?: number,
        owner?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1GetAuthorizationURLResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/url',
            query: {
                'provider': provider,
                'projectId': projectId,
                'cli': cli,
                'port': port,
                'owner': owner,
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * VerifyProviderTokenFrom verifies that a token has been created for a provider since given timestamp
     * @param provider
     * @param timestamp
     * @param projectId
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1VerifyProviderTokenFromResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static oAuthServiceVerifyProviderTokenFrom(
        provider: string,
        timestamp: string,
        projectId?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1VerifyProviderTokenFromResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/verify/{provider}/{timestamp}',
            path: {
                'provider': provider,
                'timestamp': timestamp,
            },
            query: {
                'projectId': projectId,
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param provider
     * @param body
     * @returns v1StoreProviderTokenResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static oAuthServiceStoreProviderToken(
        provider: string,
        body: {
            projectId?: string;
            accessToken?: string;
            owner?: string;
            context?: v1Context;
        },
    ): CancelablePromise<v1StoreProviderTokenResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/{provider}/token',
            path: {
                'provider': provider,
            },
            body: body,
        });
    }

}
