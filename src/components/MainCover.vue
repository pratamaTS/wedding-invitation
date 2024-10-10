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
          <p class="font-medium text-lg my-2">Saudara/i {{ query.guest }}</p>
          <p class="font-medium my-2">Izinkan kami turut mengundang anda dalam acara kami</p>
        </div>
        
        <div class="mt-12 text-center" v-show="buttonVisible">
          <button @click="navigateToWeddingInvitation()" variant="outline-secondary" class="px-5 py-2 rounded-lg bg-gray-800 text-gray-100 mx-auto">
            <i class="fa-regular fa-envelope"></i> Open
          </button>
        </div>
      </div>
    </section>
    
  </section>
</template>

<script setup>
import { ref, computed} from 'vue'
import { useRoute } from 'vue-router'
import backgroundImage from '@/assets/images/prewedding-couple.jpg' // Set your background image path

const emits = defineEmits(['open'])

const couples = ['Youga', 'Nanda'] // Customize the couple's names

const route = useRoute()
let query = computed(() => route.query)

if (route.query.guest === undefined) query = { guest: '' }

const buttonVisible = ref(true) // Initially, the button is not visible

const navigateToWeddingInvitation = () => {
  emits('open')
  setTimeout(() => { 
    document.querySelector('#firstSight').scrollIntoView({ behavior: 'smooth' }) 
  }, 300)
}
</script>

<style scoped>
.tangerine-font {
  font-family: 'Tangerine', cursive;
}

.text-title {
  font-size: 2.5rem; /* Default font size for smaller screens */
  color: rgb(244, 163, 25);
  white-space: nowrap; /* Ensure names don't break into multiple lines */
}

.gold-button {
  background-color: rgb(244, 163, 25); /* gold color */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.gold-button:hover {
  background-color:  rgb(229, 145, 0); /* slightly darker gold on hover */
}

button i {
  margin-right: 8px; /* Add space between the icon and text */
  font-size: 1.2em; /* Adjust icon size if needed */
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
  background-color: rgba(193, 224, 249, 0.8); /* Translucent background */
  backdrop-filter: blur(1px); /* Apply a blur effect */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  border-radius: 15px;
  max-width: 90%;
  padding: 1.5rem;
  padding-top: 100px;
  position: absolute; /* Absolute positioning relative to the parent section */
  top: 29%; /* Center vertically in the section */
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

