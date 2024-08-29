import { useData } from 'vitepress'
import { t } from './utils'

export function useTranslate(lang?: string) {
  console.log(useData().lang.value)
  return (key: string) => t(key, lang || useData().lang.value)
}
