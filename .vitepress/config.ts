import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Lorem ipsum",
    titleTemplate: false,
    description: "Lorem ipsum dolor sit amet",
    base: "/",

    cleanUrls: true,

    srcDir: "src",
    outDir: ".vitepress/dist",
    cacheDir: ".vitepress/cache",

    appearance: true,
    lastUpdated: true,

    themeConfig: {
        search: {
            provider: "local",
        },

        sidebar: [
            {
                items: [{ text: "Lorem ipsum", link: "/" }],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/rowencode/openshelf" },
        ],
    },
});
