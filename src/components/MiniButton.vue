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
import { ref, onMounted, onUnmounted } from 'vue'
import { useState } from '@/stores/state.js'
const hasInteracted = ref(false)
import musicFile from '@/assets/musics/Vancouver Sleep Clinic - Someone to Stay (Audio).mp3'

const state = useState()

// Refs for icon state and audio
const musicIcon = ref('fa-solid fa-volume-off') // Start with volume off (muted)
const isPlaying = ref(false) // Initially not playing
const audio = new Audio(musicFile)

// Set the audio segment start and end times
const reffStartTime = 3;
const reffEndTime = 255;

const giftAction = () => setTimeout(() => { document.querySelector('#envelope').scrollIntoView({ behavior: 'smooth' }) }, 300)

// Function to start playing music after user interaction
const startMusic = async () => {
  if (!hasInteracted.value) {
    try {
      audio.currentTime = reffStartTime;
      audio.muted = false; // Unmute when user interacts
      await audio.play();
      musicIcon.value = 'fa-solid fa-volume-high'; // Update icon to indicate playing
      isPlaying.value = true;
      hasInteracted.value = true; // Mark as interacted
    } catch (error) {
      console.error('Playback failed:', error);
      audio.muted = true; // Handle exceptions by muting again if needed
    }
  }
}

// Toggle background music on button click
const backgroundMusicAction = () => {
  if (isPlaying.value) {
    audio.pause();
    musicIcon.value = 'fa-solid fa-volume-off';
  } else {
    if (!hasInteracted.value) {
      startMusic(); // Ensure interaction before playing
    } else {
      audio.currentTime = reffStartTime;
      audio.play();
      musicIcon.value = 'fa-solid fa-volume-high';
    }
  }
  isPlaying.value = !isPlaying.value;
}

// Loop specific audio segment
audio.addEventListener('timeupdate', () => {
  if (audio.currentTime >= reffEndTime) {
    audio.currentTime = reffStartTime;
    audio.play();
  }
});

onMounted(() => {
  audio.muted = true; // Start muted to comply with autoplay policies
  window.addEventListener('click', startMusic, { once: true });
});

onUnmounted(() => {
  audio.pause();
  audio.removeEventListener('timeupdate', handleTimeUpdate);
  window.removeEventListener('click', startMusic);
});
</script>


<style scoped>
.button {
  @apply bg-gray-600 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-full text-lg grid place-items-center left-3 text-amber-400 z-50 mb-2;
  height: 40px;
  width: 40px;
}
</style>
