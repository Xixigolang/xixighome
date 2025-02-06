import { defineUserConfig } from "vuepress";  

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // 默认语言 (英语)
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    // 中文CN
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
    // 西班牙语ES
    "/es/": {
      lang: "es-ES",
      title: "documento demo",
      description: "vuex",
    }
    
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

// log // run live web//
// pnpm run docs:dev

// log // run build on netlify, vercel, github pages,web //  
// pnpm docs:build

