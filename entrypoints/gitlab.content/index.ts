import '@/entrypoints/gitlab.content/projects_list/style.css';

export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    function addClassesToElements(selector: string, classes: string[]) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        classes.forEach(className => {
          element.classList.add(className);
        });
      });
    }

    addClassesToElements('.project-name', ['gl+_project-name']);
  },
});