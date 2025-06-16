<template>
  <section id="skills" class="py-20 bg-white">
    <div class="container mx-auto px-5">
      <h2 class="text-3xl md:text-4xl text-center mb-12 text-gray-800 relative">
        Kỹ năng
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal-400 -mb-3"></span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="skill in skills" :key="skill.title"
          class="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-indigo-500"></div>
          <div class="text-4xl mb-4">{{ skill.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ skill.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  icon: string
  title: string
  description: string
}

const skills: Skill[] = [
  {
    icon: '🌐',
    title: 'Frontend Development',
    description: 'HTML5, CSS3, JavaScript, React, Vue.js, Angular, TypeScript'
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Node.js, Python, PHP, Java, Express.js, Django, Laravel'
  },
  {
    icon: '🗄️',
    title: 'Database',
    description: 'MySQL, PostgreSQL, MongoDB, Firebase, Redis'
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'AWS, Google Cloud, Docker, Kubernetes, CI/CD'
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'React Native, Flutter, Ionic, Progressive Web Apps'
  },
  {
    icon: '🛠️',
    title: 'Tools & Others',
    description: 'Git, Figma, Adobe XD, Agile, Scrum, REST API'
  }
]
</script>
