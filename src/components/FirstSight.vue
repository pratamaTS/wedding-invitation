<template>
  <section class="w-full mb-12">
    <wave class="fill-gray-800"></wave>
    <section class="container-section">
      <HeaderSection title="Pandangan Pertama"></HeaderSection>
      <Card title="Kisah kami berawal dari">
        <template v-slot:body>
          <p class="text-sm p-6 text-justify" style="color: black;">
            In faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum hendrerit malesuada odio. Fusce ut elit ut augue sollicitudin blandit. Phasellus volutpat lorem. Duis non pede et neque luctus tincidunt. Duis interdum tempus elit. Aenean metus. Vestibulum ac lacus. Vivamus porttitor, massa ut hendrerit bibendum, metus.
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
