/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DefinitionAlert } from './DefinitionAlert';
import type { DefinitionEval } from './DefinitionEval';
import type { DefinitionIngest } from './DefinitionIngest';
import type { DefinitionRemediate } from './DefinitionRemediate';

/**
 * Definition defines the rule type. It encompases the schema and the data evaluation.
 */
export type v1RuleTypeDefinition = {
    /**
     * in_entity is the entity in which the rule is evaluated.
     * This can be repository, build_environment or artifact.
     */
    inEntity?: string;
    /**
     * rule_schema is the schema of the rule. This is expressed in JSON Schema.
     */
    ruleSchema?: any;
    /**
     * param_schema is the schema of the parameters that are passed to the rule.
     * This is expressed in JSON Schema.
     */
    paramSchema?: any;
    ingest?: DefinitionIngest;
    eval?: DefinitionEval;
    remediate?: DefinitionRemediate;
    alert?: DefinitionAlert;
};

