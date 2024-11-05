import {constants} from './constants';
import {defs} from './defs';

let initialized: boolean = false;

export namespace env {
    export var gon: object = defs.gon;

    export function initialize() {
        if (initialized)
            return;

        gon = window.gon;

        initialized = true;
    }

    export function isGitlab(){
        return window.location.host.includes('gitlab')
    }
}