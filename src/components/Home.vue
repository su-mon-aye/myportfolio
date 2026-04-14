<script setup>
import { useI18n } from "vue-i18n";
import router from '@/router';
import { computed, onMounted, ref } from "vue";
import IconCommunity from "./icons/IconCommunity.vue";
import IconTooling from "./icons/IconTooling.vue";
import IconEcosystem from "./icons/IconEcosystem.vue";
import IconDocumentation from "./icons/IconDocumentation.vue";
import IconProjectTitle from "./icons/IconProjectTitle.vue";
import IconProjectDescription from "./icons/IconProjectDescription.vue";
import IconProjectLink from "./icons/IconProjectLink.vue";
import IconFacebook from "./icons/IconFacebook.vue";
import IconGithub from "./icons/IconGithub.vue";
import IconPhone from "./icons/IconPhone.vue";
import IconLinkedIn from "./icons/IconLinkedIn.vue";
import IconEmail from "./icons/IconEmail.vue";
import { Button, Dialog } from "primevue";
import IconMenu from "./icons/IconMenu.vue";
import IconClose from "./icons/IconClose.vue";


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
const selectedLang=ref()
const display=ref(false)
const changeLanguage = (event) => {
  locale.value = event.target.value
  router.replace({ name: currentRouteName.value, query: { lang: event.target.value } })
}
const activeSection = ref('about')

const sections = [ 'about', 'projects', 'contact']

onMounted(() => {
  const currentLang = router.currentRoute.value.query.lang
   
  if(currentLang) {
      locale.value = currentLang;
      selectedLang.value=currentLang;
      }
      else{
        selectedLang.value="en"
      }
       const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  },
  {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0
  }
)

  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

const firstlangs=["Vue Js","React Js","Flutter","Dart","TypeScript"]
const secondlangs=["Tailwind Css","Bootstrap Css","Firebase,MSSQL,PostgreSQL","Git - Git Hub"]

const projects = [
  {
    title: 'projects.project_one.title',
    description: 'projects.project_one.description',
    images: ['/photos/image1.png', '/photos/image2.png', '/photos/image3.png'],
    link: 'https://www.taythanthar.com/'
  },
  {
    title: 'projects.project_two.title',
    description: 'projects.project_two.description',
    images: ['/photos/pyan_lwar_image1.png', '/photos/pyan_lwar_image2.png', '/photos/pyan_lwar_image3.png'],
    link: 'https://www.pyanlwar.com/'
  },
  {
    title: 'projects.project_three.title',
    description: 'projects.project_three.description',
    images: ['/photos/aps_image1.png', '/photos/aps_image2.png', '/photos/aps_image3.png'],
    link: 'https://aps.com.mm/'
  },
  {
    title: 'projects.project_four.title',
    description: 'projects.project_four.description',
    images: ['/photos/fcs_image1.png', '/photos/fcs_image2.png', '/photos/fcs_image3.png'],
    link: 'https://fcs-dev.web.app/'
  },
   {
    title: 'projects.project_five.title',
    description: 'projects.project_five.description',
   
  },
    {
    title: 'projects.project_six.title',
    description: 'projects.project_six.description',
   
  }
];
</script>

<template>
  <main class="min-h-screen bg-gray-900 text-white font-roboto">
    <!-- Header -->
    <header class="bg-gray-800 sticky top-0 mt-[-50px] h-[50px] -mx-5">
      <nav class="flex justify-between items-center w-full h-full px-2">
        <h1 class="text-2xl font-bold">{{ $t("home.my_porfolio") }}</h1>
        <ul class=" space-x-4  md:flex hidden">
          <li><a href="#about" key="about"  :class="[
        'cursor-pointer hover:underline',
        activeSection === 'about' ? 'text-blue-500 font-bold' : 'text-gray-500'
      ]">{{ $t("home.about") }}</a></li>
          <li><a href="#projects" key="projects"  :class="[
        'cursor-pointer hover:underline',
        activeSection === 'projects' ? 'text-blue-500 font-bold' : 'text-gray-500'
      ]">{{ $t("home.projects") }}</a></li>
          <li><a href="#contact" key="contact"  :class="[
        'cursor-pointer hover:underline',
        activeSection === 'contact' ? 'text-blue-500 font-bold' : 'text-gray-500'
      ]">{{ $t("home.contact") }}</a></li>
          <li>
            <select class="bg-gray-800 text-white rounded p-1" v-model="selectedLang" @change="changeLanguage($event)">
              <option v-for="language in supportedLanguages" :value="language.code">{{
                $t(language.name) }}</option>
            </select>
          </li>
        </ul>
         <button 
    class="md:hidden block"
    @click="display = !display"
  >
  <IconMenu v-show="!display" class="w-6 h-6" />
   <IconClose v-show="display"  class="w-6 h-6" />
</button>
        <Dialog v-model:visible="display"  dismissableMask :closable="false" 
        :showHeader="false" position="right" class="!absolute !top-10 !right-7 !md:hidden"
         
         :style="{ width: '50vw' }">
<ul class="gap-6 flex flex-col">
          <li @click="display = false"><a href="#about" key="about"  :class="[
        'cursor-pointer hover:underline',
        activeSection === 'about' ? 'text-blue-500 font-bold' : 'text-gray-500'
      ]">{{ $t("home.about") }}</a></li>
          <li @click="display = false"><a href="#projects" key="projects"  :class="[
        'cursor-pointer hover:underline',
        activeSection === 'projects' ? 'text-blue-500 font-bold' : 'text-gray-500'
      ]">{{ $t("home.projects") }}</a></li>
          <li @click="display = false"><a href="#contact" key="contact"  :class="[
        'cursor-pointer hover:underline',
        activeSection === 'contact' ? 'text-blue-500 font-bold' : 'text-gray-500'
      ]">{{ $t("home.contact") }}</a></li>
          <li>
            <select class="bg-gray-800 text-white rounded p-1" v-model="selectedLang" @change="changeLanguage($event)">
              <option v-for="language in supportedLanguages" :value="language.code">{{
                $t(language.name) }}</option>
            </select>
          </li>
        </ul>        </Dialog>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto text-center py-3 md:py-10 pt-10">
      <h2 class="text-4xl font-bold">{{ $t("home.welcome_title") }}</h2>
      <p class="mt-4 text-lg">{{ $t("home.welcome_text") }}</p>
    </section>

    <section id="about" class="container mx-auto py-10">

      <div class="flex flex-col md:flex-row items-center">

        <img src="/avatorPhoto.jpg" alt="Profile Picture"
          class="w-[200px] h-3/4 md:w-1/4 rounded-full mx-auto shadow-sm">

        <div class="md:w-2/3 mt-8 md:mt-0 md:pl-8">
          <p>
            {{ $t("home.about_text") }}
          </p>
          <div class="mt-8">
            <h1>{{ $t("home.lang_intro") }}</h1>
          <div class="flex gap-[18%]">
            <!-- first language section -->
              <ul class="list-disc marker:text-gray-500 p-[20px]">
              <li v-for="lang in firstlangs" :key="lang">
                {{ lang }}
              </li>
            </ul>
             <!-- second language section -->
              <ul class="list-disc marker:text-gray-500 p-[20px] ">
              <li class="text-wrap" v-for="lang in secondlangs" :key="lang">
                {{ lang }}
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-2 md:py-20">
      <div class=" mx-auto">
        <h3 class="text-3xl font-bold text-center">{{ $t("home.projects") }}</h3>
        <div class="mt-8 flex flex-col">

          <div v-for="project in projects" :key="project.title"
            class="bg-gray-700 rounded-lg flex flex-col md:flex-row gap-1 md:gap-10 mb-8 p-4 md:mx-[5%]">
            <div v-if="project.images && project.images.length" class="flex flex-row gap-2 w-[93%] md:w-[50%] shrink-0">
              <img v-for="value in project.images" :src="value" :key="value" alt="Project Image"
                class="object-cover w-1/3 rounded-lg flex-1">
            </div>
            <div v-else
              class="w-[100%] md:w-[50%] shrink-0 flex items-center justify-center bg-gray-800 rounded-lg text-gray-400">
              No image available
            </div>
            <div class="p-1 py-3 md:py-6 md:p-6 ">
              <div class="flex gap-2 items-center">
                <IconProjectTitle class="w-4 h-4 text-gray-400" />
                <h4 class="text-xl font-bold">{{ $t(project.title) }}</h4>
              </div>
              <div class="flex gap-2 items-center">
                <IconProjectDescription class="w-4 h-4 shrink-0 text-gray-400" />
                <p class="mt-2">{{ $t(project.description) }}</p>
              </div>
              <div v-if="project.link" class="flex gap-2 items-center">
                <IconProjectLink class="w-4 h-4 text-gray-400" />
                <a target="_blank" rel="noopener noreferrer" :href="project.link"
                  class="text-blue-400 hover:text-blue-300 hover:underline">{{ project.link }}</a>
              </div>
              <div v-else class="flex gap-2 items-center text-gray-500">
                <IconProjectLink class="w-4 h-4" />
                <span>No link provided</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-2 md:py-20">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold">{{ $t("home.contact") }}</h3>
        <div class="mt-8 flex justify-center items-center space-x-6">
          <a href="https://www.facebook.com/share/1HBD5brysG/" target="_blank" class="text-black bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center">
           <IconFacebook class="w-4 h-4" />
          </a>
          <a href="https://github.com/su-mon-aye" target="_blank" class="text-black bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center">
            <IconGithub class="w-4 h-4" />
          </a>
          <!-- <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" class="text-black bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center">
            <IconLinkedIn class="w-4 h-4" />
          </a> -->
          <a href="mailto:sumon.sue@email.com" target="_blank" class="text-black bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center">
            <IconEmail class="w-4 h-4" />
          </a>
           <a href="tel:+959258484683" target="_blank" class="text-black bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center">
           <IconPhone class="w-4 h-4" />
          </a>
        </div>
        <div class="mt-9">
          <h1 class="animate-pulse text-[12px] text-gray-400 pb-5">{{ $t("home.download_desc") }}</h1>
          <div>
            <a v-if="locale=='en'" href="/files/sumonaye_english.xlsx" download="SuMonAye(Resume and Work History).xlsx"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            {{ $t("home.download_text") }}
          </a>
           <a v-else href="/files/sumonaye_japan.xlsx" download="【ス ・ モン ・ エ-】履歴書_職務経歴書 ).xlsx"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            {{ $t("home.download_text") }}
          </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-center">
      <p>&copy; 2026 {{ $t("home.footer_text") }}</p>
    </footer>
  </main>
</template>
