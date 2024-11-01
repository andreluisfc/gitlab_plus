import { constants } from './constants';

export const style = document.createElement('style');

style.textContent = `
        .${constants.C_CLASS_PROJECTS_LIST} .${constants.C_CLASS_PROJECT_LIST_ROW}:nth-child(even) {
            background-color: #1e1e1e; /* Cor de fundo para linhas pares */
        }
        .${constants.C_CLASS_PROJECTS_LIST} .${constants.C_CLASS_PROJECT_LIST_ROW}:nth-child(odd) {
            background-color: #000000; /* Cor de fundo para linhas ímpares */
        }
    `;