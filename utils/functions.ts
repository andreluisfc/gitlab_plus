export namespace functions {
    export function addClassesToElements(selector: string, classes: string[]) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            classes.forEach(className => {
                element.classList.add(className);
            });
        });
    }

    export function injectStyles(style: HTMLStyleElement) {
        document.head.append(style);
    }
}