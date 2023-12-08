/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Context } from './v1Context';
import type { v1RuleTypeDefinition } from './v1RuleTypeDefinition';

/**
 * RuleType defines rules that may or may not be user defined.
 * The version is assumed from the folder's version.
 */
export type v1RuleType = {
    /**
     * id is the id of the rule type.
     * This is mostly optional and is set by the server.
     */
    id?: string;
    /**
     * name is the name of the rule type.
     */
    name?: string;
    /**
     * context is the context in which the rule is evaluated.
     */
    context?: v1Context;
    /**
     * def is the definition of the rule type.
     */
    def?: v1RuleTypeDefinition;
    /**
     * description is the description of the rule type.
     */
    description?: string;
    /**
     * guidance are instructions we give the user in case a rule fails.
     */
    guidance?: string;
};

