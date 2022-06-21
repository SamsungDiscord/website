import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://samsungdiscord.co",
  
  themeColor: false,

  iconPrefix: "iconfont icon-",

  repo: "samsungdiscord/website",

  docsDir: "/docs",

  fullscreen: false,

  darkmode: "toggle",

  navbar: navbar,

  sidebar: sidebar,

  footer: "Not affiliated with Samsung<br> <span class=\"icon iconfont icon-code\"></span> with ❤️ by UshieKane",

  copyright: false,

  contributors: false,

  displayFooter: true,

  pageInfo: [
    "Author",
    "ReadingTime"
  ],

  plugins: {
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom"
        ],
      },
    },
  },
});
