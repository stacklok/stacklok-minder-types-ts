/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Context } from './v1Context';

export type v1Repository = {
    id?: string;
    context?: v1Context;
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

