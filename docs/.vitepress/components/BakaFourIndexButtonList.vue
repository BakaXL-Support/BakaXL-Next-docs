<script setup lang="ts">
import { VPButton } from "vitepress/theme";
import { useTranslate } from "../i18n/composable";
const t = useTranslate();
const list = [
  {
    title: "关于在 Ubuntu 上运行 BakaXL 启动器的指引",
    link: "./running-in-ubuntu",
    emoji: "🐧",
  },
  {
    title: "在 Linux 中运行 BakaXL 4.0 时不显示窗体",
    link: "./no-window-in-linux",
    emoji: "🪟"
  }, {
    title: "BakaXL 4.0 无限弹窗提醒更新",
    link: "./update-remind-bug",
    emoji: "🔄"
  }
];
</script>
<template>
  <div class="list">
    <VPButton v-for="item in list" :text="item.emoji + t(item.title)" :href="item.link"></VPButton>
  </div>

</template>
<style scoped>
a {
  text-decoration: none;
}

.list {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
}
</style>
