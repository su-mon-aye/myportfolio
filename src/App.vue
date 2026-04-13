<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
const { locale} = useI18n();
const route = useRoute();


onMounted(() => {
  const currentLang = route.query.lang
  if(currentLang)
{
  locale.value = route.query.lang
}
 
})

</script>

<template>
  <main>
    <RouterView class="p-5"></RouterView>
  </main>
</template>


