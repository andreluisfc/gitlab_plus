import { functions } from '@/utils/functions';
import { constants } from './constants';
import { style } from './style';
import '@/entrypoints/gitlab.content/projects_list/style.css';

function AddProjectOwnerTag{
    const projectDetails = document.querySelectorAll(`.${constants.C_CLASS_PROJECT_DETAILS}`);
    projectDetails.forEach(projectDetail => {
        const projectOwner = projectDetail.querySelector(`.${constants.C_CLASS_NAMESPACE_NAME}`);
        const projectOwnerTag = document.createElement('span');
        projectOwnerTag.classList.add('gl+_project-owner-tag');
        projectOwnerTag.textContent = 'Owner';
        projectOwner.appendChild(projectOwnerTag);
    });
}

export namespace projectList {
    export function Initialize(){
        functions.injectStyles(style);
        functions.addClassesToElements('.project-name', ['gl+_project-name']);
    }
}