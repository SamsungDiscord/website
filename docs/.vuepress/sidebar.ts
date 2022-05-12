import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    icon: "home",
    text: "Home",
    prefix: "/",
    link: "/",
  },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    link: "/guide/",
    children: [
      "firmware.md",
      "ladb.md",
    ],
  },
]);
