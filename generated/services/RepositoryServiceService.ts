/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1Context } from '../models/v1Context';
import type { v1DeleteRepositoryByIdResponse } from '../models/v1DeleteRepositoryByIdResponse';
import type { v1DeleteRepositoryByNameResponse } from '../models/v1DeleteRepositoryByNameResponse';
import type { v1GetRepositoryByIdResponse } from '../models/v1GetRepositoryByIdResponse';
import type { v1GetRepositoryByNameResponse } from '../models/v1GetRepositoryByNameResponse';
import type { v1ListRemoteRepositoriesFromProviderResponse } from '../models/v1ListRemoteRepositoriesFromProviderResponse';
import type { v1ListRepositoriesResponse } from '../models/v1ListRepositoriesResponse';
import type { v1RegisterRepositoryResponse } from '../models/v1RegisterRepositoryResponse';
import type { v1UpstreamRepositoryRef } from '../models/v1UpstreamRepositoryRef';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RepositoryServiceService {

    /**
     * @param provider
     * @param projectId
     * @param limit
     * @param offset
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1ListRepositoriesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static repositoryServiceListRepositories(
        provider: string,
        projectId?: string,
        limit?: number,
        offset?: number,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1ListRepositoriesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/repositories/provider/{provider}',
            path: {
                'provider': provider,
            },
            query: {
                'projectId': projectId,
                'limit': limit,
                'offset': offset,
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param provider
     * @param projectId
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1ListRemoteRepositoriesFromProviderResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static repositoryServiceListRemoteRepositoriesFromProvider(
        provider: string,
        projectId?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1ListRemoteRepositoriesFromProviderResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/repositories/provider/{provider}/remote',
            path: {
                'provider': provider,
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
     * @param repositoryId
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1GetRepositoryByIdResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static repositoryServiceGetRepositoryById(
        repositoryId: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1GetRepositoryByIdResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/repository/id/{repositoryId}',
            path: {
                'repositoryId': repositoryId,
            },
            query: {
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param repositoryId
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1DeleteRepositoryByIdResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static repositoryServiceDeleteRepositoryById(
        repositoryId: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1DeleteRepositoryByIdResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/repository/id/{repositoryId}',
            path: {
                'repositoryId': repositoryId,
            },
            query: {
                'context.provider': contextProvider,
                'context.project': contextProject,
                'context.retiredOrganization': contextRetiredOrganization,
            },
        });
    }

    /**
     * @param provider
     * @param name
     * @param projectId
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1GetRepositoryByNameResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static repositoryServiceGetRepositoryByName(
        provider: string,
        name: string,
        projectId?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1GetRepositoryByNameResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/repository/provider/{provider}/name/{name}',
            path: {
                'provider': provider,
                'name': name,
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
     * @param name
     * @param projectId
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1DeleteRepositoryByNameResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static repositoryServiceDeleteRepositoryByName(
        provider: string,
        name: string,
        projectId?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1DeleteRepositoryByNameResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/repository/provider/{provider}/name/{name}',
            path: {
                'provider': provider,
                'name': name,
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
     * @returns v1RegisterRepositoryResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static repositoryServiceRegisterRepository(
        provider: string,
        body: {
            projectId?: string;
            repository?: v1UpstreamRepositoryRef;
            context?: v1Context;
        },
    ): CancelablePromise<v1RegisterRepositoryResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/repository/provider/{provider}/register',
            path: {
                'provider': provider,
            },
            body: body,
        });
    }

}
