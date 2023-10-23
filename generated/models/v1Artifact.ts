/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ArtifactVersion } from './v1ArtifactVersion';

export type v1Artifact = {
    artifactPk?: string;
    owner?: string;
    name?: string;
    type?: string;
    visibility?: string;
    repository?: string;
    versions?: Array<v1ArtifactVersion>;
    createdAt?: string;
};

