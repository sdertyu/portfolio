import { defineStore } from 'pinia'
import defaults from '@/stores/defaults'
import { ref, type Ref } from 'vue'
import type { NavItem } from '@/types'

const useStore = defineStore('store', () => {
  const navItems: Ref<NavItem[]> = ref(defaults.navItem)

  return { navItems }
})

export default useStore
