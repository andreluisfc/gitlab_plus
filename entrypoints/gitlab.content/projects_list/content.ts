import { functions } from '@/utils/functions';
import { constants } from './constants';
import { style } from './style';
import '@/entrypoints/gitlab.content/projects_list/style.css';

export namespace projectList {
    export function Initialize(){
        functions.injectStyles(style);
        functions.addClassesToElements('.project-name', ['gl+_project-name']);
    }
}