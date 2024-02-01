// import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
// import { tocPlugin } from "@vuepress/plugin-toc";
// import themeSidebar from "vuepress-theme-sidebar";

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
  // plugins: [
  //   tocPlugin({
  //     // 配置项
  //   }),
  // ],
  // bundler: viteBundler(),
  theme: defaultTheme({
    // sidebarType: "right",
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
        // children: [{ text: "vue", link: "/vue" }],
      },
      {
        text: "Wheel",
        link: "/wheel/",
        // children: [{ text: "vue", link: "/vue" }],
      },
      {
        text: "JavaScript",
        link: "/js/",
        // children: [
        //   { text: "es6", link: "/js/es6" },
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
    sidebar: {
      "/js/": [
        {
          text: "JavaScript",
          children: ["/js/es6.md", "/js/test.md"],
        },
      ],
    },
    // sidebarDepth: 0,
  }),
  port: 8787,
});
