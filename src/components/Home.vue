<script setup>
import { useI18n } from "vue-i18n";

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
const { locale } = useI18n();
const changeLanguage = (event) => {
  locale.value = event.target.value
}
</script>

<template>
  <main class="min-h-screen bg-gray-900 text-white">
    <!-- Header -->
    <header class="bg-gray-800 p-4">
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
              <!-- <option value="es">ES</option> -->
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

    <!-- About Section -->
    <section id="about" class="container mx-auto py-20">
      <h3 class="text-3xl font-bold text-center">About Me</h3>
      <div class="mt-8 flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 text-center object-cover">
          <img src="/avatorPhoto.jpg" alt="Profile Picture" class="rounded-full mx-auto">
        </div>
        <div class="md:w-2/3 mt-8 md:mt-0 md:pl-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-gray-800 py-20">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold text-center">My Projects</h3>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="bg-gray-700 p-6 rounded-lg">
            <h4 class="text-xl font-bold">Project One</h4>
            <p class="mt-2">A brief description of the project goes here.</p>
            <a href="#" class="mt-4 inline-block text-blue-400 hover:text-blue-300">View Project</a>
          </div>
          <!-- Project 2 -->
          <div class="bg-gray-700 p-6 rounded-lg">
            <h4 class="text-xl font-bold">Project Two</h4>
            <p class="mt-2">A brief description of the project goes here.</p>
            <a href="#" class="mt-4 inline-block text-blue-400 hover:text-blue-300">View Project</a>
          </div>
          <!-- Project 3 -->
          <div class="bg-gray-700 p-6 rounded-lg">
            <h4 class="text-xl font-bold">Project Three</h4>
            <p class="mt-2">A brief description of the project goes here.</p>
            <a href="#" class="mt-4 inline-block text-blue-400 hover:text-blue-300">View Project</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container mx-auto py-20">
      <h3 class="text-3xl font-bold text-center">Contact Me</h3>
      <form class="mt-8 max-w-xl mx-auto">
        <div class="mb-4">
          <label for="name" class="block mb-2">Name</label>
          <input type="text" id="name" class="w-full p-2 rounded bg-gray-800 border border-gray-700">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" class="w-full p-2 rounded bg-gray-800 border border-gray-700">
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2">Message</label>
          <textarea id="message" rows="4" class="w-full p-2 rounded bg-gray-800 border border-gray-700"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 p-4 text-center">
      <p>&copy; 2026 My Portfolio. All rights reserved.</p>
    </footer>
  </main>
</template>
