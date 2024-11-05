import { functions } from '@/utils/functions';
import { constants } from './constants';
import { style } from './style';
import '@/entrypoints/gitlab.content/projects_list/style.css';

function AddProjectOwnerTag(){
    const rows = document.querySelectorAll('.project-row');
    rows.forEach((row) => {
        const userAccess = row.querySelector('.user-access-role');
        if(userAccess?.textContent?.toUpperCase() == "OWNER"){
            row.classList.add('glp-project-owner');
        }
    });
}

export namespace projectList {
    export function initialize(){
        functions.injectStyles(style);
        functions.addClassesToElements('.project-name', ['gl+_project-name']);
        AddProjectOwnerTag();
    }
}