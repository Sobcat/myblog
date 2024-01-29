import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

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
    repo: "https://github.com/Sobcat",
    themePlugins: {
      backToTop: true,
    },
    navbar: [
      // NavbarItem
      {
        text: "HOME",
        link: "/",
      },
      {
        text: "前端",
        link: "/front/",
      },
      {
        text: "杂余记录",
        link: "/other/",
        children: [{ text: "vue", link: "/vue" }],
      },
      {
        text: "JavaScript",
        link: "/js/",
        // children: [
        //   { text: "js", link: "/js" },
        //   { text: "text", link: "/js/test" },
        // ],
      },
      {
        text: "Vue",
        link: "/vue/",
        children: [{ text: "vue", link: "/vue" }],
      },
      {
        text: "TypeScript",
        link: "/TypeScript/",
        children: [{ text: "vue", link: "/vue" }],
      },
      {
        text: "移动端",
        link: "/mobile/",
        children: [
          { text: "小程序", link: "/vue" },
          { text: "uniapp", link: "/vue" },
        ],
      },
      {
        text: "低代码",
        link: "/lowCode/",
        children: [{ text: "vue", link: "/vue" }],
      },
    ],
    // sidebar: [
    //   {
    //     text: "JavaScript",
    //     link: "/js/",
    //     collapsible: true,
    //     children: [
    //       { text: "js", link: "/js" },
    //       { text: "text", link: "/js/test" },
    //     ],
    //   },
    //   {
    //     text: "Vue",
    //     link: "/vue/",
    //     collapsible: true,
    //     children: [{ text: "vue", link: "/vue" }],
    //   },
    // ],
    // sidebarDepth: 2
  }),
  port: 8787,
});
