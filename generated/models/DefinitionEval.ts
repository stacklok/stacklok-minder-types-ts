/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvalJQComparison } from './EvalJQComparison';
import type { EvalRego } from './EvalRego';
import type { EvalTrusty } from './EvalTrusty';
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
     * trusty is only used if the `trusty` type is selected.
     */
    trusty?: EvalTrusty;
};

