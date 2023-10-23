/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RemediateGhBranchProtectionType } from './RemediateGhBranchProtectionType';
import type { RemediatePullRequestRemediation } from './RemediatePullRequestRemediation';
import type { v1RestType } from './v1RestType';

export type DefinitionRemediate = {
    type?: string;
    rest?: v1RestType;
    ghBranchProtection?: RemediateGhBranchProtectionType;
    pullRequest?: RemediatePullRequestRemediation;
};

