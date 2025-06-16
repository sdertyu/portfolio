<template>
  <footer class="bg-gray-800 text-white text-center py-8">
    <div class="container mx-auto px-5">
      <div class="flex justify-center gap-4 mb-4">
        <a v-for="social in socialLinks" :key="social.title" :href="social.href" :title="social.title"
          class="text-white text-2xl transition-colors duration-300 hover:text-teal-400">
          {{ social.icon }}
        </a>
      </div>
      <p>&copy; 2025 Nguyễn Văn An. Tất cả quyền được bảo lưu.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface SocialLink {
  href: string
  title: string
  icon: string
}

const socialLinks: SocialLink[] = [
  { href: '#', title: 'LinkedIn', icon: '💼' },
  { href: '#', title: 'GitHub', icon: '💻' },
  { href: '#', title: 'Email', icon: '📧' },
  { href: '#', title: 'Phone', icon: '📞' },
]
</script>
