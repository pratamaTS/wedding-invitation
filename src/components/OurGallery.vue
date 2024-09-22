<template>
  <section class="w-full xl:bg-slate-100">
    <section class="w-full px-0">
      <!-- Check if galleries is not null and has images -->
      <viewer v-if="galleries && galleries.length > 0" :images="galleries">
        <div class="flex flex-wrap">
          <!-- First image as landscape -->
          <div data-aos="fade-up" class="w-full">
            <img :src="galleries[0]" class="w-full h-auto" alt="Landscape Photo" />
          </div>

          <!-- Remaining 3 portrait images below -->
          <template v-for="(src, index) in galleries.slice(1)" :key="index" data-aos="zoom-in">
            <div data-aos="fade-up" class="w-4/12">
              <img :src="src" class="w-full h-auto" :alt="`Portrait Photo ${index + 1}`" />
            </div>
          </template>
        </div>
      </viewer>
      <!-- Show a loading message while fetching the images -->
      <div v-else class="text-center">
        Loading images...
      </div>
    </section>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const galleries = ref(null)
onMounted(() => {
  axios.get('contents/galleries.json')
    .then(res => {
      galleries.value = res.data.galleries
    })
    .catch(err => {
      console.error(err)
      alert('Failed to load gallery images.')
    })
})
</script>

<style scoped>
/* Add any custom styling if necessary */
</style>
