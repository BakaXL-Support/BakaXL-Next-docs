<script setup lang="ts">
import { useTranslate } from "../i18n/composable";
import WarnTip from "./WarnTip.vue";

defineProps<{
  status: "抢先体验" | "过时文档" | "封存文档";
}>();

const t = useTranslate();
</script>

<template>
  <div mt2 flex="~ gap2 wrap">
    <small>
      {{ `${t("文档目前处在特殊状态")}: ` }}
      <Badge v-if="status === '抢先体验'" type="tip" :text="t(status)" />
      <Badge
        v-else-if="status === '过时文档'"
        type="warning"
        :text="t(status)"
      />

      <Badge
        v-else-if="status === '封存文档'"
        type="danger"
        :text="t(status)"
      />
    </small>

    <WarnTip v-if="status === '抢先体验'">
      {{ t("本文档内功能处于早期阶段") }}
    </WarnTip>
    <WarnTip v-if="status === '过时文档'">
      {{ t("本文档部分内容已不再可靠，请等待更新") }}
    </WarnTip>
    <WarnTip v-if="status === '封存文档'">
      {{ t("本文档已被封存，仅供参考使用，文档所述均已失效或不可保证") }}
    </WarnTip>
  </div>
</template>

<style scoped>
.pre {
  font-size: 0.9em;
  background-color: #92de756c;
  padding: 0.2em 0.4em;
  border-radius: 0.5rem;
  color: #b1f748;
}
.old {
  font-size: 0.9em;
  background-color: #fde0476c;
  padding: 0.2em 0.4em;
  border-radius: 0.5rem;
  color: #fde047;
}
.ach {
  font-size: 0.9em;
  background-color: #fd59476c;
  padding: 0.2em 0.4em;
  border-radius: 0.5rem;
  color: #fd4747;
}
</style>
