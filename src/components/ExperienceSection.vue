<template>
  <section id="experience" class="py-20 bg-gray-50">
    <div class="container mx-auto px-5">
      <h2 class="text-3xl md:text-4xl text-center mb-12 text-gray-800 relative">
        Kinh nghiệm làm việc
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal-400 -mb-3"></span>
      </h2>
      <div class="relative max-w-4xl mx-auto">
        <!-- Timeline line -->
        <div
          class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-indigo-500 transform -translate-x-1/2 hidden md:block">
        </div>

        <div v-for="(item, index) in experiences" :key="index" class="relative mb-12 md:mb-16">
          <!-- Timeline dot -->
          <div
            class="absolute left-1/2 top-5 w-4 h-4 bg-teal-400 border-4 border-white rounded-full transform -translate-x-1/2 shadow-lg shadow-teal-400/30 z-10 hidden md:block">
          </div>

          <div
            class="bg-white p-8 rounded-2xl shadow-lg relative transition-transform duration-300 hover:-translate-y-2"
            :class="index % 2 === 0 ? 'md:ml-[calc(50%+30px)] md:text-left' : 'md:mr-[calc(50%+30px)] md:text-right'">
            <!-- Arrow -->
            <div v-if="index % 2 === 0"
              class="absolute left-0 top-5 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white -ml-4 hidden md:block">
            </div>
            <div v-else
              class="absolute right-0 top-5 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white -mr-4 hidden md:block">
            </div>

            <div class="text-teal-400 font-bold text-sm mb-2">{{ item.period }}</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ item.title }}</h3>
            <h4 class="text-lg text-indigo-500 font-semibold mb-4">{{ item.company }}</h4>
            <p class="text-gray-600 leading-relaxed mb-4">{{ item.description }}</p>
            <div class="flex flex-wrap gap-2" :class="index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'">
              <span v-for="skill in item.skills" :key="skill"
                class="bg-teal-400/20 text-gray-800 px-3 py-1 rounded-full text-sm font-bold border border-teal-400/30">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Experience {
  period: string
  title: string
  company: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    period: '2022 - Hiện tại',
    title: 'Senior Full Stack Developer',
    company: 'Công ty TNHH Công nghệ ABC',
    description: 'Phát triển và duy trì các ứng dụng web quy mô lớn phục vụ hơn 100,000 người dùng. Làm việc với React, Node.js, và AWS để xây dựng hệ thống microservices.',
    skills: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    period: '2021 - 2022',
    title: 'Frontend Developer',
    company: 'Startup XYZ Technology',
    description: 'Phát triển giao diện người dùng cho ứng dụng mobile và web. Tối ưu hóa hiệu suất và trải nghiệm người dùng, tăng conversion rate lên 25%.',
    skills: ['Vue.js', 'React Native', 'TypeScript', 'Firebase']
  },
  {
    period: '2020 - 2021',
    title: 'Junior Web Developer',
    company: 'Công ty phần mềm DEF Solutions',
    description: 'Bắt đầu sự nghiệp với việc phát triển website doanh nghiệp và hệ thống quản lý nội bộ. Học hỏi và áp dụng các best practices trong lập trình.',
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']
  }
]
</script>
