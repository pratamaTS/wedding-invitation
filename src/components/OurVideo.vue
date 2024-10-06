<template>
  <section class="w-full xl:bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection class="max-w-9/12" title="Video Kami" subtitle=""></HeaderSection>
    </section>
    <div data-aos="zoom-in" class="w-10/12 mx-auto">
      <iframe
        class="w-full aspect-video"
        :src="youtubeEmbedUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'

// Modify the YouTube link to the embed format
const youtubeEmbedUrl = 'https://www.youtube.com/embed/auKi1IHzn1Q'

</script>
