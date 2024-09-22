<template>
  <section class="fixed bottom-24 pl-2">
    <!-- Background Music Button -->
    <button @click="backgroundMusicAction" class="button">
      <i :class="musicIcon"></i>
    </button>
    <!-- Gift Action Button -->
    <button @click="giftAction" class="button">
      <i class="fa-solid fa-gift"></i>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useState } from '@/stores/state.js'
import musicFile from '@/assets/musics/Vancouver Sleep Clinic - Someone to Stay (Audio).mp3' // Replace with the actual path

const state = useState()

// Refs for icon state and audio
const musicIcon = ref('fa-solid fa-volume-high') // Set default to volume high (playing)
const isPlaying = ref(true) // Set default to playing
const audio = new Audio(musicFile) // Use the imported file for the audio source

// Reff start and end time (in seconds)
const reffStartTime = 0; // 2:05 in seconds
const reffEndTime = 255; // Example: 30 seconds reff, up to 2:35

// Action to toggle music and icon
const backgroundMusicAction = () => {
  if (isPlaying.value) {
    audio.pause() // Pause the music
    musicIcon.value = 'fa-solid fa-volume-off' // Change icon to volume off
  } else {
    audio.currentTime = reffStartTime // Set the audio to the start of the reff
    audio.play() // Play the music
    musicIcon.value = 'fa-solid fa-volume-high' // Change icon to volume high
  }
  isPlaying.value = !isPlaying.value // Toggle the playing state
}

// Automatically loop the "reff" part
audio.addEventListener('timeupdate', () => {
  if (audio.currentTime >= reffEndTime) {
    audio.currentTime = reffStartTime // Go back to the start of the reff
    audio.play() // Replay from the start of the reff
  }
})

// Play music by default from the reff when the component is mounted
onMounted(() => {
  audio.currentTime = reffStartTime
  audio.play() // Play the music
  musicIcon.value = 'fa-solid fa-volume-high' // Change icon to volume high
})
</script>

<style scoped>
.button {
  @apply bg-gray-600 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-full text-lg grid place-items-center left-3 text-amber-400 z-50 mb-2;
  height: 40px;
  width: 40px;
}
</style>
