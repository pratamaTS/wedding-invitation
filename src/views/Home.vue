<template>
  <section :class="{ 'no-scroll': !canScroll }">
    <MainCover id="mainCover" @open="handleOpen"></MainCover>
    <MiniButton @click="() => navigationHandler('#main-cover')">
      Scroll to the top
    </MiniButton>
    <FirstSight id="firstSight"></FirstSight>
    <GroomBride></GroomBride>
    <Timelines v-on:goToGuestBook="navigationHandler('#guest-book')"></Timelines>
    <OurGallery></OurGallery>
    <OurVideo></OurVideo>
    <Envelope id="envelope"></Envelope>
    <GuestBook id="guest-book"></GuestBook>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MainCover from '@/components/MainCover.vue'
import FirstSight from '@/components/FirstSight.vue'
import GroomBride from '@/components/GroomBride.vue'
import Timelines from '@/components/Timelines.vue'
import OurGallery from '@/components/OurGallery.vue'
import OurVideo from '@/components/OurVideo.vue'
import Envelope from '@/components/Envelope.vue'
import GuestBook from '@/components/GuestBook.vue'
import MiniButton from '@/components/MiniButton.vue'

const canScroll = ref(false)

const handleOpen = () => {
  canScroll.value = true
}

// Navigation handler
const navigationHandler = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}

</script>

<style>
.no-scroll {
  overflow: hidden;
  height: 100vh;
}
</style>
