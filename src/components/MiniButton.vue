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
import { ref, onMounted, onUnmounted } from 'vue';
import { useState } from '@/stores/state.js';
import musicFile from '@/assets/musics/Vancouver Sleep Clinic - Someone to Stay (Audio).mp3';

// State and refs
const hasInteracted = ref(false);
const state = useState();
const musicIcon = ref('fa-solid fa-volume-off');
const isPlaying = ref(false);
const audio = new Audio(musicFile);

// Audio start and end times
const reffStartTime = 3;
const reffEndTime = 255;

// Function to ensure user interaction before playing music
const startMusic = async () => {
  if (!hasInteracted.value) {
    try {
      // Safari-specific handling
      if (audio.paused && audio.readyState === 4) {
        audio.muted = false; // Unmute the audio
        audio.currentTime = reffStartTime;
        await audio.play();
        isPlaying.value = true;
        musicIcon.value = 'fa-solid fa-volume-high';
        hasInteracted.value = true; // Mark as user interaction
      }
    } catch (error) {
      console.error('Playback error:', error);
    }
  }
};

// Function to toggle music play/pause
const backgroundMusicAction = () => {
  if (isPlaying.value) {
    audio.pause();
    musicIcon.value = 'fa-solid fa-volume-off';
  } else {
    if (!hasInteracted.value) {
      startMusic(); // Ensure user interaction before playing
    } else {
      audio.currentTime = reffStartTime;
      audio.play();
      musicIcon.value = 'fa-solid fa-volume-high';
    }
  }
  isPlaying.value = !isPlaying.value;
};

// Loop the specific part of the audio
audio.addEventListener('timeupdate', () => {
  if (audio.currentTime >= reffEndTime) {
    audio.currentTime = reffStartTime;
    audio.play();
  }
});

const giftAction = () => {
  setTimeout(() => {
    document.querySelector('#envelope').scrollIntoView({ behavior: 'smooth' });
  }, 300);
};

// Make sure we properly handle browser autoplay policies
onMounted(() => {
  // Mute the audio initially to prevent autoplay issues
  audio.muted = true;

  // Add an event listener for user interaction to start music in Safari
  const clickHandler = () => {
    startMusic();
    window.removeEventListener('click', clickHandler);
  };

  window.addEventListener('click', clickHandler, { once: true });
});

onUnmounted(() => {
  audio.pause();
  audio.removeEventListener('timeupdate', handleTimeUpdate);
});
</script>

<style scoped>
.button {
  @apply bg-gray-600 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-full text-lg grid place-items-center left-3 text-amber-400 z-50 mb-2;
  height: 40px;
  width: 40px;
}
</style>
