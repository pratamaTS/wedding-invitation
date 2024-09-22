<template>
  <section>
    <MainCover id="mainCover"></MainCover>
    <MiniButton @click="() => navigationHandler('#main-cover')">
      Scroll to the top
    </MiniButton>
    <FirstSight></FirstSight>
    <GroomBride></GroomBride>
    <Timelines v-on:goToGuestBook="navigationHandler('#guest-book')"></Timelines>
    <OurGallery></OurGallery>
    <OurVideo></OurVideo>
    <Envelope id="envelope"></Envelope>
    <GuestBook id="guest-book"></GuestBook>
  </section>
</template>

<script setup>

import MainCover from '@/components/MainCover.vue'
import FirstSight from '@/components/FirstSight.vue'
import GroomBride from '@/components/GroomBride.vue'
import Timelines from '@/components/Timelines.vue'
import OurGallery from '@/components/OurGallery.vue'
import OurVideo from '@/components/OurVideo.vue'
import Envelope from '@/components/Envelope.vue'
import GuestBook from '@/components/GuestBook.vue'
import MiniButton from '@/components/MiniButton.vue'

// Navigation handler
const navigationHandler = id => {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })
}

</script>
