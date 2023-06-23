import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/it222282/Desktop/dev_backend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}