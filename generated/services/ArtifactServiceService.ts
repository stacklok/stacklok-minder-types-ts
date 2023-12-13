/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1GetArtifactByIdResponse } from '../models/v1GetArtifactByIdResponse';
import type { v1ListArtifactsResponse } from '../models/v1ListArtifactsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArtifactServiceService {

    /**
     * @param id
     * @param latestVersions
     * @param tag
     * @param contextProvider
     * @param contextProject
     * @param contextRetiredOrganization
     * @returns v1GetArtifactByIdResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static artifactServiceGetArtifactById(
        id: string,
        latestVersions?: number,
        tag?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1GetArtifactByIdResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/artifact/{id}',
            path: {
                'id': id,
            },
            query: {
                'latestVersions': latestVersions,
                'tag': tag,
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
     * @returns v1ListArtifactsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static artifactServiceListArtifacts(
        provider: string,
        projectId?: string,
        contextProvider?: string,
        contextProject?: string,
        contextRetiredOrganization?: string,
    ): CancelablePromise<v1ListArtifactsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/artifacts/{provider}',
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

}
