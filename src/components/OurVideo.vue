<template>
  <section class="w-full xl:bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection class="max-w-9/12" title="Video Kami" subtitle=""></HeaderSection>
    </section>
    <VueVideoPlayer data-aos="zoom-in" class="w-10/12 mx-auto" :src="source" />
  </section>
</template>

<script setup>

import VueVideoPlayer from 'vue3-player-video'
import HeaderSection from '@/components/HeaderSection.vue'

const source = 'https://dl.dropbox.com/s/ggu2nnvsddf45he/Tretan%20Muslim%20_%20Luna%20Prewedding%20Video%20%28%20720%20X%201280%20%29.mp4?dl=2'

</script>
