<template>
  <section id="home" class="h-screen flex items-center justify-center text-center relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-purple-600/80"
      style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><defs><pattern id=&quot;grid&quot; width=&quot;10&quot; height=&quot;10&quot; patternUnits=&quot;userSpaceOnUse&quot;><path d=&quot;M 10 0 L 0 0 0 10&quot; fill=&quot;none&quot; stroke=&quot;rgba(255,255,255,0.1)&quot; stroke-width=&quot;1&quot;/></pattern></defs><rect width=&quot;100&quot; height=&quot;100&quot; fill=&quot;url(%23grid)&quot;/></svg>');">
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-5">
      <h1 class="text-4xl md:text-6xl text-white mb-4 animate-fade-in-up">
        {{ name }}
      </h1>
      <p class="text-xl md:text-2xl text-teal-400 mb-8 animate-fade-in-up-delay-1">
        {{ displayedSubtitle }}
      </p>
      <p class="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-2">
        {{ description }}
      </p>
      <a href="#contact"
        class="inline-block px-8 py-3 bg-teal-400 text-gray-900 no-underline rounded font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-400/40 relative overflow-hidden group">
        <span
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
        Liên hệ với tôi
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const name = 'Nguyễn Văn An'
const subtitle = 'Full Stack Developer'
const description = 'Tôi là một lập trình viên đam mê công nghệ, chuyên phát triển ứng dụng web và mobile hiện đại. Với 3 năm kinh nghiệm, tôi luôn nỗ lực tạo ra những sản phẩm chất lượng cao.'

const displayedSubtitle = ref('')

const typeWriter = () => {
  let i = 0
  const type = () => {
    if (i < subtitle.length) {
      displayedSubtitle.value += subtitle.charAt(i)
      i++
      setTimeout(type, 100)
    }
  }
  setTimeout(type, 1000)
}

onMounted(() => {
  typeWriter()
})
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease forwards;
}

.animate-fade-in-up-delay-1 {
  animation: fade-in-up 1s ease 0.3s both;
}

.animate-fade-in-up-delay-2 {
  animation: fade-in-up 1s ease 0.6s both;
}
</style>
