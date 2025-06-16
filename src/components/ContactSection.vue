<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-5">
      <h2 class="text-3xl md:text-4xl text-center mb-12 text-gray-800 relative">
        Liên hệ
        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal-400 -mb-3"></span>
      </h2>
      <form @submit="handleSubmit" class="max-w-2xl mx-auto">
        <div class="mb-6">
          <label for="name" class="block mb-2 text-gray-800 font-bold">Họ và tên</label>
          <input type="text" id="name" v-model="form.name" required
            class="w-full p-4 border-2 border-gray-200 rounded-lg transition-colors duration-300 focus:outline-none focus:border-teal-400" />
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-gray-800 font-bold">Email</label>
          <input type="email" id="email" v-model="form.email" required
            class="w-full p-4 border-2 border-gray-200 rounded-lg transition-colors duration-300 focus:outline-none focus:border-teal-400" />
        </div>
        <div class="mb-6">
          <label for="subject" class="block mb-2 text-gray-800 font-bold">Tiêu đề</label>
          <input type="text" id="subject" v-model="form.subject" required
            class="w-full p-4 border-2 border-gray-200 rounded-lg transition-colors duration-300 focus:outline-none focus:border-teal-400" />
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2 text-gray-800 font-bold">Nội dung</label>
          <textarea id="message" v-model="form.message" rows="6" required
            class="w-full p-4 border-2 border-gray-200 rounded-lg transition-colors duration-300 focus:outline-none focus:border-teal-400 resize-none"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" :disabled="isSubmitting"
            class="inline-block px-8 py-3 bg-teal-400 text-gray-900 rounded font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-400/40 relative overflow-hidden group disabled:opacity-50">
            <span
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            {{ isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.')

    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof ContactForm] = ''
    })
  } catch (error) {
    alert('Có lỗi xảy ra. Vui lòng thử lại!')
  } finally {
    isSubmitting.value = false
  }
}
</script>
