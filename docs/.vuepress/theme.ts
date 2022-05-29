import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Ushie",
    // url: "https://mrhope.site",
  },
  
  themeColor: {
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
    purple: "#8e44ad",
  },

  iconPrefix: "iconfont icon-",

  // logo: "/logo.svg",

  repo: "samsungdiscord/website",

  docsDir: "samsungdiscord/website/docs",

  navbar: navbar,

  sidebar: sidebar,

  footer: "Not affiliated with Samsung<br> <span class=\"icon iconfont icon-code\"></span> by UshieKane with ❤️",

  copyright: false,

  displayFooter: true,

  pageInfo: ["Author", "Category", "ReadingTime"],

  plugins: {
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
