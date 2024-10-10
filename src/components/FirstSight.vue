<template>
  <section class="w-full mb-12">
    <wave class="fill-gray-800"></wave>
    <section class="container-section">
      <section data-aos="fade-up" class="sm:w-full w-9/12 px-4 mb-6 text-center flex justify-center flex-col items-center ml-auto mr-auto">
        <!-- Decoration -->
        <img src="@/assets/images/flores.png" class="w-6/12 md:w-6/12 mx-auto">
      </section>
      <Card title="">
        <template v-slot:body>
          <p class="text-sm p-6 text-justify" style="color: black;">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah diciptakan untukmu isteri-isteri dari jenismu sendiri,
            supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu
            rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.”<br>
            (QS. Ar-Rum : 21)
            <br><br>
          </p>
        </template>
        <template v-slot:footer>
          <img src="@/assets/images/first-sight.jpg" class="w-full" alt="">
        </template>
      </Card>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Card from '@/components/Card.vue'
import wave from '@/assets/svg/wave.svg'

</script>
