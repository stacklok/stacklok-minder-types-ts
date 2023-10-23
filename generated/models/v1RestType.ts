/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RestTypeFallback } from './RestTypeFallback';

/**
 * RestType defines the rest data evaluation.
 * This is used to fetch data from a REST endpoint.
 */
export type v1RestType = {
    /**
     * endpoint is the endpoint to fetch data from.
     * This can be a URL or the path on the API.bool
     * This is a required field and must be set.
     * This is also evaluated via a template which allows
     * us dynamically fill in the values.
     */
    endpoint?: string;
    /**
     * method is the method to use to fetch data.
     */
    method?: string;
    /**
     * headers are the headers to be sent to the endpoint.
     */
    headers?: Array<string>;
    /**
     * body is the body to be sent to the endpoint.
     */
    body?: string;
    /**
     * parse is the parsing mechanism to be used to parse the data.
     */
    parse?: string;
    /**
     * fallback provides a body that the ingester would return in case
     * the REST call returns a non-200 status code.
     */
    fallback?: Array<RestTypeFallback>;
};

