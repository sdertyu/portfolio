<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="container mx-auto px-5">
      <h2 class="text-3xl md:text-4xl text-center mb-12 text-gray-800 relative">
        Dự án nổi bật
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal-400 -mb-3"></span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title"
          class="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
          <div
            class="h-48 bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white text-4xl">
            {{ project.icon }}
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                class="bg-teal-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  icon: string
  title: string
  description: string
  technologies: string[]
}

const projects: Project[] = [
  {
    icon: '🛒',
    title: 'E-Commerce Platform',
    description: 'Hệ thống thương mại điện tử hoàn chỉnh với tính năng thanh toán trực tuyến, quản lý đơn hàng và dashboard admin.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    icon: '📋',
    title: 'Task Management App',
    description: 'Ứng dụng quản lý công việc nhóm với tính năng thời gian thực, chat và báo cáo tiến độ.',
    technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL']
  },
  {
    icon: '🏥',
    title: 'Hospital Management System',
    description: 'Hệ thống quản lý bệnh viện với module đặt lịch khám, quản lý bệnh án và thanh toán.',
    technologies: ['Angular', 'Python', 'Django', 'MySQL']
  }
]
</script>
