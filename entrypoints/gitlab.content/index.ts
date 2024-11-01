import {projectList} from "./projects_list";

export default defineContentScript({
    matches: ['<all_urls>'],
    main() {
        projectList.Initialize();
    }
});