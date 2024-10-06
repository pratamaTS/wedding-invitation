<template>
  <section 
    class="w-full h-screen relative bg-cover bg-center" 
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Overlay Section -->
    <section class="absolute inset-0 flex items-center justify-center">
      <div 
        class="overlay-box p-8 text-center rounded-lg"
      >
        <h2 class="text-lg font-bold">Pernikahan</h2>
        <h1 class="tangerine-font text-title font-bold">{{ couples.join(' & ') }}</h1>
        <p class="font-medium text-lg my-2" style="color: gray;">#aYOGAsforeverwithNANDA</p>
        <div class="my-4">
          <img src="@/assets/images/flores.png" class="w-12 sm:w-16 mx-auto">
          <!-- <decoration class="fill-amber-500" style="size: 20px;"></decoration> -->
        </div>
        <div class="text-sm">
          <p class="font-medium">Kepada Bapak/Ibu Yang Terhormat</p>
          <p class="font-medium text-lg my-2">Saudara/i {{ query.first }}</p>
          <p class="font-medium my-2">Izinkan kami turut mengundang anda dalam acara kami</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import backgroundImage from '@/assets/images/prewedding-couple.jpg' // Set your background image path
// import decoration from '@/assets/svg/decoration-2.svg'

const couples = ['Youga', 'Nanda'] // Customize the couple's names

const route = useRoute()
let query = computed(() => route.query)

if (route.query.first === undefined) query = { first: '' }
</script>

<style scoped>
.tangerine-font {
  font-family: 'Tangerine', cursive;
}

.text-title {
  font-size: 2.5rem; /* Default font size for smaller screens */
  color: rgb(248, 188, 84);
  white-space: nowrap; /* Ensure names don't break into multiple lines */
}

h1 {
  color: black;
}

h2 {
  color: black;
}

p {
  color: black;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

/* Overlay box */
.overlay-box {
  background-color: rgba(187, 221, 249, 0.8); /* Translucent background */
  backdrop-filter: blur(5px); /* Apply a blur effect */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  border-radius: 15px;
  max-width: 90%;
  padding: 2rem;
  padding-top: 70px;
  position: absolute; /* Absolute positioning relative to the parent section */
  top: 28%; /* Center vertically in the section */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -60%); /* Adjust for exact centering and move more top */
  animation: slideUp 1s ease-out forwards; /* Apply animation */
}

/* Keyframes for the slide-up effect */
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate(-50%, 50%); /* Start slightly below and invisible */
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -60%); /* Final position above center */
  }
}

/* Responsive text scaling */
@media (min-width: 640px) {
  .text-title {
    font-size: 2.8rem; /* Slightly increase font size */
  }
}

@media (min-width: 768px) {
  .text-title {
    font-size: 3.2rem; /* Adjust font size for medium screens */
  }
}

@media (min-width: 1024px) {
  .text-title {
    font-size: 3.6rem; /* Further increase on larger screens */
  }
}

@media (min-width: 1280px) {
  .text-title {
    font-size: 4rem; /* Increase on extra-large screens */
  }
}
</style>

