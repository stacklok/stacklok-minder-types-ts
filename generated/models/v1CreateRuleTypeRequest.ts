/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Context } from './v1Context';
import type { v1RuleType } from './v1RuleType';

/**
 * CreateRuleTypeRequest is the request to create a rule type.
 */
export type v1CreateRuleTypeRequest = {
    /**
     * rule_type is the rule type to be created.
     */
    ruleType?: v1RuleType;
    context?: v1Context;
};

