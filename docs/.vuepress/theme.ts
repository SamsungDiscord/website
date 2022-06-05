import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://samsungdiscord.co",

  author: {
    name: "Ushie",
    url: "https://ushiekane.dev",
  },

  // logo: "/logo.png",
  
  themeColor: {
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
    purple: "#8e44ad",
  },

  iconPrefix: "iconfont icon-",

  // logo: "/logo.png",

  repo: "samsungdiscord/website",

  docsDir: "samsungdiscord/website/docs",

  navbar: navbar,

  sidebar: sidebar,

  footer: "Not affiliated with Samsung<br> <span class=\"icon iconfont icon-code\"></span> with ❤️ by UshieKane",

  copyright: false,

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
