import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  base: "/myblog/",
  lang: "zh-CN",
  title: "Dai Blog",
  description: "这是我的 vuepress blog",
  head: [
    [
      "link",
      { rel: "icon", href: "https://v2.vuepress.vuejs.org/images/hero.png" },
    ],
  ],
  // dest: `docs/dist`,
  // public: `docs/public`,
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "首页",
        link: "/",
      },
    ],
    sidebar: [
      {
        text: "JavaScript",
        link: "/js/",
        collapsible: true,
        children: [
          { text: "js", link: "/js" },
          { text: "text", link: "/js/test" },
        ],
      },
      {
        text: "Vue",
        link: "/vue/",
        collapsible: true,
        children: [{ text: "vue", link: "/vue" }],
      },
    ],
    // sidebarDepth: 2
  }),
  port: 8787,
});
