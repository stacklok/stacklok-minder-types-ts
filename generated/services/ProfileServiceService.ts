/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1CreateProfileRequest } from '../models/v1CreateProfileRequest';
import type { v1CreateProfileResponse } from '../models/v1CreateProfileResponse';
import type { v1CreateRuleTypeRequest } from '../models/v1CreateRuleTypeRequest';
import type { v1CreateRuleTypeResponse } from '../models/v1CreateRuleTypeResponse';
import type { v1DeleteProfileResponse } from '../models/v1DeleteProfileResponse';
import type { v1DeleteRuleTypeResponse } from '../models/v1DeleteRuleTypeResponse';
import type { v1GetProfileByIdResponse } from '../models/v1GetProfileByIdResponse';
import type { v1GetProfileStatusByNameResponse } from '../models/v1GetProfileStatusByNameResponse';
import type { v1GetProfileStatusByProjectResponse } from '../models/v1GetProfileStatusByProjectResponse';
import type { v1GetRuleTypeByIdResponse } from '../models/v1GetRuleTypeByIdResponse';
import type { v1GetRuleTypeByNameResponse } from '../models/v1GetRuleTypeByNameResponse';
import type { v1ListProfilesResponse } from '../models/v1ListProfilesResponse';
import type { v1ListRuleTypesResponse } from '../models/v1ListRuleTypesResponse';
import type { v1UpdateProfileRequest } from '../models/v1UpdateProfileRequest';
import type { v1UpdateProfileResponse } from '../models/v1UpdateProfileResponse';
import type { v1UpdateRuleTypeRequest } from '../models/v1UpdateRuleTypeRequest';
import type { v1UpdateRuleTypeResponse } from '../models/v1UpdateRuleTypeResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProfileServiceService {

    /**
     * @param body
     * @returns v1CreateProfileResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceCreateProfile(
        body: v1CreateProfileRequest,
    ): CancelablePromise<v1CreateProfileResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/profile',
            body: body,
        });
    }

    /**
     * @param body
     * @returns v1UpdateProfileResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceUpdateProfile(
        body: v1UpdateProfileRequest,
    ): CancelablePromise<v1UpdateProfileResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/profile',
            body: body,
        });
    }

    /**
     * @param name name is the name of the profile to get
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @param entityType entity is the entity to get status for. Incompatible with `all`
     * @param entityId id is the ID of the entity to get status for. Incompatible with `all`
     * @param all
     * @param rule
     * @returns v1GetProfileStatusByNameResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceGetProfileStatusByName(
        name: string,
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
        entityType: 'ENTITY_UNSPECIFIED' | 'ENTITY_REPOSITORIES' | 'ENTITY_BUILD_ENVIRONMENTS' | 'ENTITY_ARTIFACTS' | 'ENTITY_PULL_REQUESTS' = 'ENTITY_UNSPECIFIED',
        entityId?: string,
        all?: boolean,
        rule?: string,
    ): CancelablePromise<v1GetProfileStatusByNameResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/profile/name/{name}/status',
            path: {
                'name': name,
            },
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
                'entity.type': entityType,
                'entity.id': entityId,
                'all': all,
                'rule': rule,
            },
        });
    }

    /**
     * @param id id is the id of the profile to get
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1GetProfileByIdResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceGetProfileById(
        id: string,
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1GetProfileByIdResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/profile/{id}',
            path: {
                'id': id,
            },
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

    /**
     * @param id id is the id of the profile to delete
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1DeleteProfileResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceDeleteProfile(
        id: string,
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1DeleteProfileResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/profile/{id}',
            path: {
                'id': id,
            },
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

    /**
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1GetProfileStatusByProjectResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceGetProfileStatusByProject(
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1GetProfileStatusByProjectResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/profile_status',
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

    /**
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1ListProfilesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceListProfiles(
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1ListProfilesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/profiles',
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

    /**
     * @param body CreateRuleTypeRequest is the request to create a rule type.
     * @returns v1CreateRuleTypeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceCreateRuleType(
        body: v1CreateRuleTypeRequest,
    ): CancelablePromise<v1CreateRuleTypeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/rule_type',
            body: body,
        });
    }

    /**
     * @param body UpdateRuleTypeRequest is the request to update a rule type.
     * @returns v1UpdateRuleTypeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceUpdateRuleType(
        body: v1UpdateRuleTypeRequest,
    ): CancelablePromise<v1UpdateRuleTypeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/rule_type',
            body: body,
        });
    }

    /**
     * @param name name is the name of the rule type.
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1GetRuleTypeByNameResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceGetRuleTypeByName(
        name: string,
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1GetRuleTypeByNameResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/rule_type/name/{name}',
            path: {
                'name': name,
            },
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

    /**
     * @param id id is the id of the rule type.
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1GetRuleTypeByIdResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceGetRuleTypeById(
        id: string,
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1GetRuleTypeByIdResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/rule_type/{id}',
            path: {
                'id': id,
            },
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

    /**
     * @param id id is the id of the rule type to be deleted.
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1DeleteRuleTypeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceDeleteRuleType(
        id: string,
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1DeleteRuleTypeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/rule_type/{id}',
            path: {
                'id': id,
            },
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

    /**
     * @param contextProvider
     * @param contextOrganization
     * @param contextProject
     * @returns v1ListRuleTypesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static profileServiceListRuleTypes(
        contextProvider?: string,
        contextOrganization?: string,
        contextProject?: string,
    ): CancelablePromise<v1ListRuleTypesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/rule_types',
            query: {
                'context.provider': contextProvider,
                'context.organization': contextOrganization,
                'context.project': contextProject,
            },
        });
    }

}
