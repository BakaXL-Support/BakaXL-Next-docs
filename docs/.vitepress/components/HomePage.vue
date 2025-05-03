<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import Contributors from './Cards/Contributors.vue'
import { computed, shallowRef } from 'vue'
import { useTranslate } from '../i18n/composable'
import { iconMap } from './icons'

const t = useTranslate()

const members = computed(() => [
  {
    avatar: 'https://github.com/tt702.png',
    name: 'TT702',
    title: t('作者'),
    links: [
      { icon: 'github', link: 'https://github.com/TT702' },
      {
        icon: { svg: iconMap.bilibili },
        link: 'https://space.bilibili.com/515094',
      },
    ],
  },
  {
    avatar: 'https://github.com/imfanhua.png',
    name: 'Fanhua',
    title: t('团队成员'),
    links: [
      { icon: 'github', link: 'https://github.com/imfanhua' },
      {
        icon: { svg: iconMap.bilibili },
        link: 'https://space.bilibili.com/352711',
      },
    ],
  },
  {
    avatar: 'https://github.com/ZhaiSoul.png',
    name: 'ZhaiSoul',
    title: t('团队成员'),
    links: [{ icon: 'github', link: 'https://github.com/ZhaiSoul' }],
  },
])

const contributors = computed(() => [
  {
    avatar: 'https://github.com/XiaoMouz.png',
    name: 'XiaoMouz',
    link: 'https://github.com/XiaoMouz',
  },
  {
    avatar: 'https://github.com/Miao-DXLK.png',
    name: 'Miao-DXLK',
    link: 'https://github.com/Miao-DXLK',
  },
  {
    avatar: 'https://github.com/Missdrop.png',
    name: 'naipu',
    link: 'https://github.com/Missdrop',
  },
  {
    avatar: 'https://github.com/GasterAlpha.png',
    name: '66Bro_',
    link: 'https://github.com/GasterAlpha',
  },
  {
    avatar: 'https://github.com/Pigeon0v0.png',
    name: 'Pigeon0v0',
    link: 'https://github.com/Pigeon0v0',
  },
  {
    avatar: 'https://github.com/LIPiston.png',
    name: 'LIPiston',
    link: 'https://github.com/LIPiston'
  },
  {
    avatar: 'https://github.com/Big-Cake-jpg.png',
    name: 'Big_Cake',
    link: 'https://github.com/Big-Cake-jpg'
  },
  {
    avatar: 'https://github.com/Seayay.png',
    name: 'Seayay',
    link: 'https://github.com/Seayay'
  },
  {
    avatar: 'https://github.com/KingOsuperSuper.png',
    name: '¯\\_(ツ)_/¯',
    link: 'https://github.com/KingOsuperSuper'
  },
  {
    avatar: 'https://github.com/KailunLarks.png',
    name: 'Kailun',
    link: "https://github.com/KailunLarks"
  },
  {
    avatar: 'https://github.com/Souiken.png',
    name: 'Ameyama Izumi',
    link: "https://github.com/Souiken"
  },
  {
    avatar: 'https://github.com/XiaoLi-sach.png',
    name: 'XiaoLi_1456',
    link: "https://github.com/XiaoLi-sach"
  },
  {
    avatar: 'https://github.com/XieXiLin2.png',
    name: 'XieXiLin',
    link: "https://github.com/XieXiLin2"
  }
])
</script>

<template>
  <div flex="~ col wrap" mt8 items-center>
    <h2 text="center gray xl" mt-11 mb-4 pb-2>
      {{ t('BakaXL 开发自 ❤') }}
    </h2>
    <VPTeamMembers class="w-full px-4" size="small" :members="members" />
  </div>
  <div flex="~ col wrap" mt8 items-center>
    <h2 text="center gray xl" mt-11 mb-4 pb-2>
      {{ t('感谢以下贡献者') }}
    </h2>
    <Contributors class="w-full px-4" :members="contributors" />
  </div>
</template>

<style></style>
