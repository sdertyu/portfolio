<template>
  <header ref="headerRef" class="fixed top-0 w-full z-50 transition-all duration-300" :class="headerClass">
    <nav class="container mx-auto px-5 flex justify-between items-center py-4">
      <a href="#" class="text-xl font-bold text-teal-400 no-underline">
        &lt;/DevPortfolio&gt;
      </a>
      <ul class="hidden md:flex list-none gap-8">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href"
            class="text-white no-underline transition-colors duration-300 relative hover:text-teal-400 group">
            {{ item.label }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import useStore from '@/stores/stores'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const store = useStore();

const headerRef = ref<HTMLElement>()
const scrollY = ref(0)

const navItems = store.navItems;

const headerClass = computed(() => ({
  'bg-black/45 backdrop-blur-sm': scrollY.value <= 100,
  'bg-black/95 backdrop-blur-md': scrollY.value > 100,
}))

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
