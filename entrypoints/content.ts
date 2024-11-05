export default defineContentScript({
    matches: ['<all_urls>'],
    world:"MAIN",
    async main() {
        // console.log("gon", window.gon);

    },
});