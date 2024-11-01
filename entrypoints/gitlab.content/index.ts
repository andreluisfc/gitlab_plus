import {projectList} from "./projects_list/content";

export default defineContentScript({
    matches: ['<all_urls>'],
    main() {
        projectList.Initialize();
    }
});