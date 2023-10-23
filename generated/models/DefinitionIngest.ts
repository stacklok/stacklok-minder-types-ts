/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ArtifactType } from './v1ArtifactType';
import type { v1BuiltinType } from './v1BuiltinType';
import type { v1DiffType } from './v1DiffType';
import type { v1GitType } from './v1GitType';
import type { v1RestType } from './v1RestType';

/**
 * Ingest defines how the data is ingested.
 */
export type DefinitionIngest = {
    /**
     * type is the type of the data ingestion.
     * we currently support rest, artifact and builtin.
     */
    type?: string;
    /**
     * rest is the rest data ingestion.
     * this is only used if the type is rest.
     */
    rest?: v1RestType;
    /**
     * builtin is the builtin data ingestion.
     */
    builtin?: v1BuiltinType;
    /**
     * artifact is the artifact data ingestion.
     */
    artifact?: v1ArtifactType;
    /**
     * git is the git data ingestion.
     */
    git?: v1GitType;
    /**
     * diff is the diff data ingestion.
     */
    diff?: v1DiffType;
};

