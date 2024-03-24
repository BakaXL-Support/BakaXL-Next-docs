import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  assetsDir: "assets",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  locales: {
    root: {
      label: "简体中文",
      title: "BakaXL 帮助中心",
      description: "下一代 BakaXL 用户帮助文档中心",
      lang: "zh-CN",
      themeConfig: {
        logo: "/public/logo.png",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "主页", link: "/" },
          { text: "开始使用 BakaXL", link: "/start-use-bakaxl" },
        ],

        sidebar: [
          {
            text: "案例",
            items: [{ text: "Examples", link: "/examples" }],
          },
        ],

        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/BakaXL-Support/BakaXL-Next-docs",
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "BakaXL Help Center",
      description: "The next generation of BakaXL user help documentation.",
      themeConfig: {
        logo: "/public/logo.png",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          { text: "Start", link: "/start-use-bakaxl" },
        ],

        sidebar: [
          {
            text: "Examples",
            items: [{ text: "Examples", link: "/examples" }],
          },
        ],

        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/BakaXL-Support/BakaXL-Next-docs",
          },
        ],
      },
    },
  },
});
