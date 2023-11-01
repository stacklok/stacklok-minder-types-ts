/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { minderv1Context } from './minderv1Context';

export type v1Repository = {
    id?: string;
    context?: minderv1Context;
    owner?: string;
    name?: string;
    repoId?: number;
    hookId?: string;
    hookUrl?: string;
    deployUrl?: string;
    cloneUrl?: string;
    hookName?: string;
    hookType?: string;
    hookUuid?: string;
    isPrivate?: boolean;
    isFork?: boolean;
    registered?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

