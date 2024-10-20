<style scoped>
/* Default font size */
.footer-count {
  font-size: 16px;
  display: inline-block;
}

/* Frame styling */
.frame {
  @apply w-4/12 rotate-180;
}

/* Input wrapper adjustments for mobile responsiveness */
.input-wrapper {
  @apply w-full flex flex-wrap gap-1 mb-3;
}

/* Label styling */
label {
  @apply text-gray-600 font-medium;
}

/* Input, textarea, select styling */
input,
textarea,
select,
option {
  @apply px-2 py-3 rounded-lg bg-gray-800 border border-gray-100 shadow-lg duration-300 focus:border-gray-500 text-gray-200 placeholder:text-gray-400;
}

/* Button styling */
button {
  @apply bg-gray-800 text-gray-100 mt-6 rounded-lg py-2 font-medium cursor-pointer active:scale-90 border-gray-500 duration-300;
}

/* Comments section styling */
.comments-section {
  @apply w-full mt-8 p-6 bg-gray-50 rounded-lg shadow-lg;
}

/* Comments content section with scrollbar hidden */
.comments-content {
  @apply max-h-[400px] overflow-y-auto;
  overflow-x: hidden;
  -ms-overflow-style: none;  /* Hide scrollbar in Internet Explorer and Edge */
  scrollbar-width: none;  /* Hide scrollbar in Firefox */
}

.comments-content::-webkit-scrollbar {
  display: none;  /* Hide scrollbar in Chrome, Safari, and other WebKit-based browsers */
}

/* Comment card styling */
.comment-card {
  @apply mb-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white flex gap-4;
  display: flex;
  flex-wrap: wrap; /* Allow wrapping */
  align-items: flex-start; /* Align content at the top */
}

/* Avatar styling */
.avatar {
  @apply w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg;
  margin-right: 10px; /* Add space between avatar and name */
}

/* Comment content styling */
.comment-content {
  @apply flex-1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Comment header styling */
.comment-header {
  @apply flex items-center justify-between mb-2 gap-1;
  flex-wrap: wrap; /* Allow wrapping when screen is smaller */
}

.comment-name {
  @apply font-semibold text-gray-800;
}

/* Comment text styling */
.comment-text {
  @apply text-gray-700 mb-2;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

/* Comment meta information styling */
.comment-meta {
  @apply flex justify-between items-center w-full;
  flex-wrap: wrap;
}

/* Date and guest count styling */
.guest-count,
.comment-date {
  @apply text-gray-500 text-sm;
  flex: 1; /* Allow both to take equal space */
  text-align: left;
}

.comment-date {
  text-align: right; /* Align date to the right */
}

/* Badge styling for "Hadir" and "Tidak Hadir" */
.badge-hadir {
  @apply bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full;
}

.badge-tidak-hadir {
  @apply bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full;
}

/* Media queries for responsive design */
/* Medium screens (tablets, small desktops) */
@media (max-width: 1024px) {
  .footer-count {
    font-size: 12px;
  }
}

/* Adjusting avatar, font sizes for small screens */
@media (max-width: 768px) {
  .footer-count {
    font-size: 10px;
  }
  
  .comment-card {
    flex-direction: row;
  }

  .avatar {
    width: 40px;
    height: 40px;
    font-size: 12px; /* Smaller initials inside avatar */
  }

  .comment-name {
    font-size: 12px; /* Smaller font for the name */
  }

  .badge-hadir,
  .badge-tidak-hadir {
    font-size: 10px; /* Smaller font for the badge */
    padding: 3px 8px; /* Reduce padding */
  }

  .comment-text {
    font-size: 12px; /* Reduce font size for the comment text */
  }

  .guest-count,
  .comment-date {
    font-size: 10px; /* Adjust font size for small screens */
    flex-basis: 100%; /* Each takes full width on small screens */
    text-align: left; /* Align both left for better stacking */
    margin-bottom: 5px; /* Add spacing between guest count and date */
  }

  .comment-meta {
    flex-direction: column; /* Stack guest count and date vertically on smaller screens */
  }
}

/* Further adjustments for extra small screens */
@media (max-width: 480px) {
  .footer-count {
    font-size: 8px;
  }

  .avatar {
    width: 36px;
    height: 36px;
    font-size: 0.875rem;
  }

  .comment-name {
    font-size: 12px;
  }

  .comment-text {
    font-size: 0.60rem;
  }

  .badge-hadir, .badge-tidak-hadir {
    font-size: 0.5rem;
    padding: 0.2rem 0.45rem;
  }

  /* Ensure avatar stays left and badges are responsive */
  .comment-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .guest-count,
  .comment-date {
    font-size: 8px; /* Further reduce the font size for extra small screens */
    text-align: left; /* Align both to the left */
  }

  .comment-meta {
    flex-direction: column; /* Ensure vertical stacking */
    justify-content: flex-start; /* Align items to the start */
  }
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="sent" @click="sent = false">Kembali</button>
      </div>
      <form v-if="!sent" ref="form" @submit="sendMessage" class="w-10/12 mx-auto mt-6">
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
        <!-- Kehadiran -->
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
        <!-- Guest Count -->
        <div class="input-wrapper" data-aos="zoom-in">
          <label class="w-full" for="JumlahTamu">Jumlah Tamu</label>
          <select
            class="w-full"
            v-model.number="JumlahTamu"
            name="Jumlah Tamu"
            id="JumlahTamu"
            required
          >

            <!-- Placeholder Option -->
            <option value="" disabled selected>Pilih jumlah tamu</option>

            <!-- Dynamically render options based on Kehadiran -->
            <option v-for="option in jumlahTamuOptions" :key="option" :value="option">{{ option }}</option>
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
            required
          ></textarea>
        </div>
        <!-- Submit -->
        <button
          :disabled="sending"
          class="w-full bg-gray-800 text-gray-100 mt-6 rounded-lg py-2 font-medium cursor-pointer active:scale-90 border-gray-500 duration-300"
          type="submit"
        >
          <i v-if="!sending" class="fa fa-paper-plane mr-1"></i>
          <i v-else class="fa fa-spinner fa-spin mr-1"></i>
          Kirim Pesan
        </button>
      </form>

      <!-- Comments Section -->
      <section class="comments-section">
        <h2 class="text-lg font-bold text-gray-800 mb-4">Komentar Tamu</h2>
        <!-- Scrolling content starts here -->
        <div class="comments-content" ref="commentsWrapper">
          <div v-if="errorFetching">
            <p class="text-red-500">Gagal mengambil komentar. Silakan coba lagi nanti.</p>
          </div>
          <!-- Loading Spinner -->
          <div v-if="loadingData" class="text-center py-4 text-gray-800">
            <i class="fa fa-spinner fa-spin text-gray-800"></i> Loading Comment...
          </div>
          <div v-else-if="comments.length === 0 && !loadingData" >
            <p class="text-gray-500">Belum ada komentar.</p>
          </div>
          <div v-else-if="comments.length > 0 && !loadingData">
            <div v-for="comment in comments" :key="comment.id" class="comment-card">
            <!-- Avatar with Initials -->
            <div class="avatar">{{ getInitials(comment.name) }}</div>

            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-name">{{ comment.name }}</span>
                <!-- Dynamic Badge based on Status -->
                <span :class="comment.status === 'Hadir' ? 'badge-hadir' : 'badge-tidak-hadir'">
                  <i :class="comment.status === 'Hadir' ? 'fa fa-check-circle' : 'fa fa-times-circle'"></i> 
                  {{ comment.status }}
                </span>
              </div>
              <p class="comment-text">{{ comment.comment }}</p>
              
              <!-- New row for guest count and created date under comment content -->
              <div class="flex justify-between items-center text-gray-800 mt-2 text-sm w-full">
                <p class="guest-count flex items-center" style="font-size:x-small;">
                  <i class="fa fa-users text-gray-500 text-xs mr-1"></i> 
                  Tamu: {{ comment.guest_count }}
                </p>
                <p class="comment-date flex items-center" style="font-size:x-small;">
                  <i class="fa fa-clock text-gray-500 text-xs mr-1"></i> 
                  {{ comment.created_date }}
                </p>
              </div>
            </div>
          </div>
          </div>
          <!-- Loader for infinite scrolling -->
          <div v-if="loadingNextPage" class="text-center py-4 text-gray-800">
            <i class="fa fa-spinner fa-spin text-gray-800"></i> Loading more comments...
          </div>
        </div>
        <div class="flex justify-center items-center space-x-2 text-center text-gray-800" style="padding-top: 20px;">
          <p class="footer-count text-lg font-semibold">{{ comments.length }} <span class="text-gray-500">komentar</span></p>
          <div class="flex items-center text-gray-800 font-bold leading-none" style="padding-bottom: 5px; font-size: large;">.</div>
          <p class="footer-count text-lg font-semibold bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
            {{ countHadir }} <span class="footer-count text-sm text-green-600">Hadir</span>
          </p>
          <div class="flex items-center text-gray-800 font-bold leading-none" style="padding-bottom: 5px; font-size: large;">.</div>
          <p class="footer-count text-lg font-semibold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
            {{ countTidakHadir }} <span class="footer-count text-sm text-red-600">Tidak Hadir</span>
          </p>
        </div>
      </section>

      <div class="w-full text-center pb-12 mt-12">
        <p class="text-sm text-amber-600 font-medium">Harjonan &copy; 2024</p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import HeaderSection from "@/components/HeaderSection.vue";
import Alert from "@/components/Alert.vue";

// Data bindings
const Nama = ref('');
const Kehadiran = ref('Hadir'); 
const JumlahTamu = ref('');
const Pesan = ref('');
const comments = ref([]);
const statusResponse = ref(false);
const showAlert = ref(false);
const sending = ref(false);
const sent = ref(false);
const errorFetching = ref(false);

// Pagination controls
const currentPage = ref(1);
const totalPages = ref(1);
const loadingData = ref(false);
const loadingNextPage = ref(false);
const observerTarget = ref(null);

// Dynamic options for Jumlah Tamu
const jumlahTamuOptions = ref([1, 2]);
// Count functions
const countHadir = computed(() => comments.value.filter(comment => comment.status === 'Hadir').length);
const countTidakHadir = computed(() => comments.value.filter(comment => comment.status === 'Tidak Hadir').length);

// Watch for changes in Kehadiran and update Jumlah Tamu options
watch(Kehadiran, (newValue) => {
  if (newValue === 'Hadir') {
    jumlahTamuOptions.value = [1, 2]; // When Kehadiran is "Hadir", show 1 and 2
  } else {
    jumlahTamuOptions.value = [0]; // When Kehadiran is "Tidak Hadir", show only 0
  }
});

// Fetch comments from the backend with pagination
const fetchComments = async (page = 1) => {
  if (page == 1) loadingData.value = true;
  else {
    if (loadingNextPage.value) return; // Prevent multiple requests at the same time
    loadingNextPage.value = true;
  }

  try {
    const response = await axios.get("https://gateway-wedding.harjonan.id/api/guest/comments", {
      params: {
        page: page,
        per_page: 500, // Limit to 5 per page
        sort_by: 'created_at',
        sort_order: 'desc',
        search: ''
      }
    });
    // Append new comments to the existing list
    comments.value = [...comments.value, ...response.data.data.data];
    totalPages.value = response.data.data.last_page; // Set total pages
    currentPage.value = page;
    errorFetching.value = false;
  } catch (error) {
    console.error("Error fetching comments:", error);
    errorFetching.value = true;
  } finally {
    loadingData.value = false;
    loadingNextPage.value = false;
    JumlahTamu.value = ''
  }
};

// Intersection observer to trigger next page load when reaching bottom of the comments section
const observeScroll = (entries) => {
  console.log("run scroll")
  console.log("current page: ", currentPage.value)
  const [entry] = entries;
  if (entry.isIntersecting && currentPage.value < totalPages.value) {
    fetchComments(currentPage.value + 1); // Fetch next page
  }
};

// Initialize observer
const initScrollObserver = () => {
  const observer = new IntersectionObserver(observeScroll, {
    root: document.querySelector('.comments-content'),
    threshold: 1.0
  });
  
  // Observe the comments wrapper for infinite scrolling
  const commentsWrapper = document.querySelector('.comments-content');
  observer.observe(commentsWrapper);
};

// Send form data to backend
const sendMessage = async (evt) => {
  evt.preventDefault();
  if (sending.value) return;

  sending.value = true;

  const data = {
    name: Nama.value,
    status: Kehadiran.value,
    guest_count: parseInt(JumlahTamu.value),
    comment: Pesan.value
  };

  try {
    await axios.post("https://gateway-wedding.harjonan.id/api/guest/comment", data);
    statusResponse.value = true;
    showAlert.value = true;
    sent.value = true;
    resetForm();
    comments.value = []; // Clear current comments
    fetchComments(1); // Refresh comments after submitting
  } catch (error) {
    statusResponse.value = false;
    showAlert.value = true;
    console.error("Error submitting comment:", error);
  } finally {
    sending.value = false;
  }
};

// Reset form fields
const resetForm = () => {
  Nama.value = '';
  Kehadiran.value = 'Hadir'; 
  JumlahTamu.value = 1;
  Pesan.value = '';
};

// Function to get initials from the name
const getInitials = (name) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
};

// Initialize data on mount
onMounted(() => {
  fetchComments(); // Initial fetch
  initScrollObserver(); // Initialize scrolling observer
});
</script>
