<script setup lang="ts">
import { VPTeamMembers } from "vitepress/theme";
import { computed } from "vue";
import { useTranslate } from "../i18n/composable";
import { iconMap } from "./icons";

const t = useTranslate();

const members = computed(() => [
  {
    avatar: "https://github.com/tt702.png",
    name: "TT702",
    title: t("作者"),
    links: [
      { icon: "github", link: "https://github.com/TT702" },
      {
        icon: { svg: iconMap.bilibili },
        link: "https://space.bilibili.com/515094",
      },
    ],
  },
  {
    avatar: "https://github.com/imfanhua.png",
    name: "Fanhua",
    title: t("团队成员"),
    links: [
      { icon: "github", link: "https://github.com/imfanhua" },
      {
        icon: { svg: iconMap.bilibili },
        link: "https://space.bilibili.com/352711",
      },
    ],
  },
  {
    avatar: "https://github.com/ZhaiSoul.png",
    name: "ZhaiSoul",
    title: t("团队成员"),
    links: [{ icon: "github", link: "https://github.com/ZhaiSoul" }],
  },
]);
</script>

<template>
  <div flex="~ col wrap" mt8 items-center>
    <h2 text="center gray xl" mt-11 mb-4 pb-2>
      {{ t("BakaXL 开发自 ❤") }}
    </h2>
    <VPTeamMembers size="small" :members="members" />
    <!-- <img src="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.wide.svg" />

    <h2 text="center lg" my-5 font-bold>
      💕
      {{ t("Thanks to all the contributors!") }}
    </h2>

    <a href="https://github.com/vue-macros/vue-macros/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=vue-macros/vue-macros" />
    </a> -->
  </div>
</template>
