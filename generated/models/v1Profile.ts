/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { mediatorv1Context } from './mediatorv1Context';
import type { ProfileRule } from './ProfileRule';

/**
 * Profile defines a profile that is user defined.
 */
export type v1Profile = {
    /**
     * context is the context in which the profile is evaluated.
     */
    context?: mediatorv1Context;
    /**
     * id is the id of the profile.
     * This is optional and is set by the system.
     */
    id?: string;
    /**
     * name is the name of the profile instance.
     */
    name?: string;
    /**
     * These are the entities that one could set in the profile.
     */
    repository?: Array<ProfileRule>;
    buildEnvironment?: Array<ProfileRule>;
    artifact?: Array<ProfileRule>;
    pullRequest?: Array<ProfileRule>;
    remediate?: string;
    alert?: string;
};

