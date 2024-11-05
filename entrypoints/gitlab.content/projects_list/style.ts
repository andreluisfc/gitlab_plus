import { constants } from './constants';

export const style = document.createElement('style');

style.textContent = `
        .glp-project-owner{
            background-color: #ff0202;
        }
                
        .${constants.C_CLASS_PROJECTS_LIST} .${constants.C_CLASS_PROJECT_LIST_ROW}:nth-child(even):not([.glp-project-owner]) {
            background-color: #1e1e1e; /* Cor de fundo para linhas pares */
        }
        .${constants.C_CLASS_PROJECTS_LIST} .${constants.C_CLASS_PROJECT_LIST_ROW}:nth-child(odd):not([.glp-project-owner]) {
            background-color: #000000; /* Cor de fundo para linhas ímpares */
        }                
    `;