<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-5">
      <h2 class="text-3xl md:text-4xl text-center mb-12 text-gray-800 relative">
        Giới thiệu
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal-400 -mb-3"></span>
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2">
          <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-400">
            <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              🎯 Về tôi
            </h3>
            <p class="text-lg leading-relaxed text-gray-600 mb-6">
              Tôi là một Full Stack Developer với niềm đam mê mãnh liệt đối với công nghệ và lập
              trình. Tốt nghiệp từ Đại học Bách Khoa Hà Nội chuyên ngành Công nghệ Thông tin, tôi
              đã có 3 năm kinh nghiệm trong việc phát triển các ứng dụng web và mobile.
            </p>
            <p class="text-lg leading-relaxed text-gray-600">
              Tôi luôn theo dõi và học hỏi những công nghệ mới nhất, từ các framework hiện đại như
              React, Vue.js đến các công nghệ backend như Node.js, Python, và các hệ quản trị cơ
              sở dữ liệu. Mục tiêu của tôi là tạo ra những sản phẩm không chỉ đẹp mắt mà còn mang
              lại trải nghiệm tuyệt vời cho người dùng.
            </p>
          </div>
        </div>
        <div class="grid gap-6">
          <div v-for="stat in stats" :key="stat.label"
            class="bg-gradient-to-br from-teal-400 to-indigo-500 p-8 rounded-2xl text-center text-white shadow-lg shadow-teal-400/30 transition-transform duration-300 hover:-translate-y-2">
            <div class="text-3xl md:text-4xl font-bold mb-2">{{ stat.number }}</div>
            <div class="text-base opacity-90">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  number: string
  label: string
}

const stats: Stat[] = [
  { number: '3+', label: 'Năm kinh nghiệm' },
  { number: '20+', label: 'Dự án hoàn thành' },
  { number: '5+', label: 'Công nghệ thành thạo' },
]
</script>
