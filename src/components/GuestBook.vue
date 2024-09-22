<style scoped>
.frame {
  @apply w-4/12 rotate-180;
}

.input-wrapper {
  @apply w-full flex flex-wrap gap-1 mb-3;
}

label {
  @apply text-gray-600 font-medium;
}

input,
textarea,
select,
option {
  @apply px-2 py-3 rounded-lg bg-gray-800 border border-gray-100 shadow-lg duration-300 focus:border-gray-500 text-gray-200 placeholder:text-gray-400;
}
</style>

<template>
  <section class="w-full xl:bg-slate-100 pt-5">
    <section class="container-section xl:bg-slate-100">
      <HeaderSection
        title="Buku Tamu"
        subtitle="Demi kelancaran acara dimohon untuk para tamu undangan untuk memastikan kehadirannya pada acara kami"
      />
      <!-- Form -->
      <Alert
        :statusResponse="statusResponse"
        :showAlert="showAlert"
        v-on:close="showAlert = false"
      />
      <div class="text-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="sent" @click="sent = false" >Enviar otro</button>
      </div>
      <form v-if="!sent" ref="form" @submit="sendMessage" class="w-10/12 mx-auto mt-6">
        <!-- Alert -->
        <!-- Guest Name -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label class="w-full" for="Nama">Nama</label>
          <input
            class="w-full"
            v-model="Nama"
            placeholder="Nama Lengkap Anda"
            name="Nama"
            id="Nama"
            type="text"
            required
          />
        </div>
        <input type="hidden" id="Fecha" name="Fecha" v-model="Fecha" />
        <!-- Guest Status -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label class="w-full" for="Kehadiran">Kehadiran</label>
          <select
            class="w-full"
            v-model="Kehadiran"
            name="Kehadiran"
            id="Kehadiran"
            required
          >
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
        </div>
        <!-- Guest Message -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label class="w-full" for="Pesan">Pesan</label>
          <textarea
            class="w-full"
            placeholder="Tuliskan pesan anda disini"
            v-model="Pesan"
            name="Pesan"
            id="Pesan"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <!-- Submit -->
        <button
          :disabled="sending"
          data-aos="zoom-in"
          class="
            w-full
            bg-gray-800
            text-gray-100
            mt-6
            rounded-lg
            py-2
            font-medium
            pointer
            active:scale-90
            border-gray-500
            duration-300
          "
          type="submit"
        >
          <i v-if="!sending" class="fa fa-paper-plane mr-1"></i>
          <i v-else class="fa fa-spinner fa-spin mr-1"></i>
          Kirim Pesan
        </button>
      </form>
      <!-- Gift Section -->
      <!-- Message Box -->
      <!--MessagesBox :messages="messages" -->
      <!-- Frames -->
      <div class="w-full text-center pb-12 mt-12">
        <p class="text-sm text-amber-600 font-medium">Harjonan &copy; 2024</p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import HeaderSection from "@/components/HeaderSection.vue";
import Alert from "@/components/Alert.vue";
import { collection, addDoc } from "firebase/firestore"; 
import db from '@/db.js'
//import Gift from '@/components/Gift.vue'

// Form handler
const form = ref(null);
const Nama = ref(null);
const Pesan = ref(null);
var Kehadiran = ref("Hadir");
const Fecha = ref(new Date());
var Dieta = ref([]);
const foods = ref([
  "Vegetariano",
  "Kosher",
  "Celiaco",
  "Sin Sal",
  "Menu Infantil (Menor a 5 años)",
  "Otro (Agregar en comentarios)",
]);
// Alert handler
const statusResponse = ref(false);
const showAlert = ref(false);

const sending = ref(false);
const sent = ref(false);

const firebasePost = () => {
  return new Promise((resolve, reject) => {
    console.log("Sending 1")
    const formData = {
      Nama: Nama.value,
      Fecha: new Date(),
      Kehadiran: Kehadiran.value,
      Pesan: Pesan.value,
      Dieta: Dieta.value,
    };
    addDoc(collection(db, "asistencia-casamiento"), formData).then(a => resolve(a)).catch(e => reject(e))
  })
};

const resetForm = () => {
    Nama.value = null;
    Pesan.value = null
    Dieta = []
    Kehadiran = "Hadir"
}

const sendMessage = (evt) => {
  if (sending.value) {
    return;
  }
  evt.preventDefault();
  sending.value = true;

  Promise.allSettled([firebasePost(), googlePost()]).then((results) => {
    if (results[1].status == "fulfilled") {
      sending.value = false;
      statusResponse.value = true;
      showAlert.value = true;
      sent.value = true;
      resetForm();
    } else {
      sending.value = true;
      statusResponse.value = false;
      showAlert.value = true;
    }
  })
};

const googlePost = async () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby1ovbqWQ5T5wkb8zGGA7oK8Qv3nMUtLz1us1SwIAF7H0H0NwQtaoB7N3RptNZElaqP/exec";
  // Post form
  const formData = new FormData(form.value);
  formData.append("Dieta", Dieta.value.join(", "));
  await fetch(scriptURL, { method: "POST", body: formData });
};

</script>
