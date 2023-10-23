/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Rule defines the individual call of a certain rule type.
 */
export type ProfileRule = {
    /**
     * type is the type of the rule to be instantiated.
     */
    type?: string;
    /**
     * params are the parameters that are passed to the rule.
     * This is optional and depends on the rule type.
     */
    params?: any;
    /**
     * def is the definition of the rule.
     * This depends on the rule type.
     */
    def?: any;
};

