/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvalJQComparison } from './EvalJQComparison';
import type { EvalPackageIntelligence } from './EvalPackageIntelligence';
import type { EvalRego } from './EvalRego';
import type { EvalVulncheck } from './EvalVulncheck';

/**
 * Eval defines the data evaluation definition.
 * This pertains to the way we traverse data from the upstream
 * endpoint and how we compare it to the rule.
 */
export type DefinitionEval = {
    type?: string;
    /**
     * jq is only used if the `jq` type is selected.
     * It defines the comparisons that are made between
     * the ingested data and the profile rule.
     */
    jq?: Array<EvalJQComparison>;
    /**
     * rego is only used if the `rego` type is selected.
     */
    rego?: EvalRego;
    /**
     * vulncheck is only used if the `vulncheck` type is selected.
     */
    vulncheck?: EvalVulncheck;
    /**
     * package_intelligence is only used if the `package_intelligence` type is selected.
     */
    packageIntelligence?: EvalPackageIntelligence;
};

