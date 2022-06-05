import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "Samsung Community",
  description: "A website for the Samsung discord community",

  base: "/",

  head: [
    [
      "link",
      { 
        rel: "icon",
        href: "/favicon.ico" 
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#6692ec",
      },
    ],
    [
      "meta",
       {
          prefix: "og: http://ogp.me/ns#",
          property: "og:image",
          content: "https://samsungdiscord.co/logo.png",
      }
    ],
    [
      "meta",
       {
          name: "description",
          content: "A website for the Samsung discord Community, containing useful guides and server-related information",
      }
    ],
  ],

  theme,
});