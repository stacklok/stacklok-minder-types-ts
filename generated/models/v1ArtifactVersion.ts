/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1GithubWorkflow } from './v1GithubWorkflow';
import type { v1SignatureVerification } from './v1SignatureVerification';

export type v1ArtifactVersion = {
    versionId?: string;
    tags?: Array<string>;
    sha?: string;
    signatureVerification?: v1SignatureVerification;
    githubWorkflow?: v1GithubWorkflow;
    createdAt?: string;
};

