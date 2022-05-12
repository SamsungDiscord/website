import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Ushie",
    // url: "https://mrhope.site",
  },

  iconPrefix: "iconfont icon-",

  // logo: "/logo.svg",

  repo: "samsungdiscord/website",

  docsDir: "samsungdiscord/website/docs",

  navbar: navbar,

  sidebar: sidebar,

  footer: "Not affiliated with Samsung or Discord Corp<br>Released under MIT License<br> Made by UshieKane with ❤️",

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
