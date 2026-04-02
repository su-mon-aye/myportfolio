<script setup>
import { useI18n } from "vue-i18n";
import router from '@/router';
import { computed } from "vue";

const supportedLanguages = [
  {
    code: "en",
    name: "supported_languages.english",
  },
  {
    code: "jp",
    name: "supported_languages.japan",
  },

];
const currentRouteName = computed(() => router.currentRoute.value.name);
const { locale } = useI18n();
const changeLanguage = (event) => {
  locale.value = event.target.value
  router.replace({ name: currentRouteName.value, query: { lang: event.target.value } })
}

const projects = [
  {
    title: 'projects.project_one.title',
    description: 'projects.project_one.description',
    images: ['/src/assets/photos/image1.png', '/src/assets/photos/image2.png', '/src/assets/photos/image3.png'],
    link: '#'
  },
  {
    title: 'projects.project_two.title',
    description: 'projects.project_two.description',
    images: ['/src/assets/photos/pyan_lwar_image1.png', '/src/assets/photos/pyan_lwar_image2.png', '/src/assets/photos/pyan_lwar_image3.png'],
    link: '#'
  },
  {
    title: 'projects.project_three.title',
    description: 'projects.project_three.description',
    images: ['/src/assets/photos/aps_image1.png', '/src/assets/photos/aps_image2.png', '/src/assets/photos/aps_image3.png'],
    link: '#'
  },
  {
    title: 'projects.project_three.title',
    description: 'projects.project_three.description',
    images: ['/src/assets/photos/fcs_image1.png', '/src/assets/photos/fcs_image1.png', '/src/assets/photos/image3.png'],
    link: '#'
  }
];
</script>

<template>
  <main class="min-h-screen bg-gray-900 text-white">
    <!-- Header -->
    <header class="bg-gray-800">
      <nav class="container mx-auto flex justify-between">
        <h1 class="text-2xl font-bold">{{ $t("home.my_porfolio") }}</h1>
        <ul class="flex space-x-4">
          <li><a href="#about" class="hover:text-gray-400">{{ $t("home.about") }}</a></li>
          <li><a href="#projects" class="hover:text-gray-400">{{ $t("home.projects") }}</a></li>
          <li><a href="#contact" class="hover:text-gray-400">{{ $t("home.contact") }}</a></li>
          <li>
            <select class="bg-gray-800 text-white rounded p-1" @change="changeLanguage($event)">
              <option v-for="language in supportedLanguages" :value="language.code">{{
                $t(language.name) }}</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto text-center py-20">
      <h2 class="text-4xl font-bold">Welcome to My Portfolio</h2>
      <p class="mt-4 text-lg">I'm a passionate developer creating amazing things.</p>
    </section>

    <section id="about" class="container mx-auto py-20">

      <div class="flex flex-col md:flex-row items-center">

        <img src="/avatorPhoto.jpg" alt="Profile Picture"
          class="w-[100px] h-w-2/4 md:w-1/4 rounded-full mx-auto shadow-sm">

        <div class="md:w-2/3 mt-8 md:mt-0 md:pl-8">
          <p>
            {{ $t("home.about_text") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class=" bg-gray-800 py-20">
      <div class=" mx-auto">
        <h3 class="text-3xl font-bold text-center">{{ $t("home.projects") }}</h3>
        <div class="mt-8 flex flex-col">

          <div v-for="project in projects" :key="project.title"
            class="bg-gray-700 rounded-lg flex flex-col md:flex-row gap-5 mb-8 p-4">
            <div class="flex flex-row gap-2">
              <img v-for="value in project.images" :src="value" :key="value" alt="Project Image"
                class="object-cover w-1/3  rounded-lg flex-1">
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold">{{ $t(project.title) }}</h4>
              <p class="mt-2">{{ $t(project.description) }}</p>
              <a :href="project.link" class="mt-4  text-blue-400 hover:text-blue-300">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold">{{ $t("home.contact") }}</h3>
        <div class="mt-8 flex justify-center items-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" class="text-gray-400 hover:text-white">
            <p>Facebook</p>
          </a>
          <a href="https://github.com/your-github" target="_blank" class="text-gray-400 hover:text-white">
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" class="text-gray-400 hover:text-white">
            <p>LinkedIn</p>
          </a>
          <p class="flex items-center text-gray-400">
            Phone: +1234567890
          </p>
        </div>
        <div class="mt-12">
          <a href="cv.xlsx" download="sumonaye(cv).xlsx"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Download CV
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-center">
      <p>&copy; 2026 My Portfolio. All rights reserved.</p>
    </footer>
  </main>
</template>
