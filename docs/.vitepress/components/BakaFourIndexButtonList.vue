<script setup lang="ts">
import { VPButton } from "vitepress/theme";
import { useTranslate } from "../i18n/composable";
const t = useTranslate();
const list = ["关于在 Ubuntu 上运行 BakaXL 启动器的问题"];
</script>
<template>
  <VPButton v-for="item in list" :text="t(item)"></VPButton>
</template>
<style scoped></style>
