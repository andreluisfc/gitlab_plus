import { projectList } from "./projects_list";
import { env } from "./env";

export default defineContentScript({
    matches: ['<all_urls>'],
    world:"MAIN",
    main() {
        if(!env.isGitlab())
            return;

        env.initialize();
        projectList.initialize();
    }
});