// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "uno.css";

import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
import StatusBadge from "../components/StatusBadge.vue";
import WarnTip from "../components/WarnTip.vue";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout);
  },
  enhanceApp({ app, router, siteData }) {
    app.use(NolebaseGitChangelogPlugin);
    app.component("StatusBadge", StatusBadge);
    app.component("WarnTip", WarnTip);
  },
} satisfies Theme;
