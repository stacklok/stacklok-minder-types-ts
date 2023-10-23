/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EvalRego = {
    /**
     * type is the type of evaluation engine to use
     * for rego. We currently have two modes of operation:
     * - deny-by-default: this is the default mode of operation
     * where we deny access by default and allow access only
     * if the profile explicitly allows it. It expects the
     * profile to set an `allow` variable to true or false.
     * - constraints: this is the mode of operation where we
     * allow access by default and deny access only if a
     * violation is found. It expects the profile to set a
     * `violations` variable with a "msg" field.
     */
    type?: string;
    /**
     * def is the definition of the rego profile.
     */
    def?: string;
};

