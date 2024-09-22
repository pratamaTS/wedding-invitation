<template>
  <section class="w-full xl:bg-slate-100 pt-12 pb-5">
    <section class="section-container">
      <HeaderSection class="max-w-9/12" title="Amplop Digital" subtitle="Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika memberi adalah ungkapan tanda terima kasih anda, anda dapat memberi kado secara cashless"></HeaderSection>
      <section class="">
        <template v-for="(wallet, x) in wallets" :key="x">
          <div data-aos="zoom-in" class="w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl">
            <img :src="wallet.thumb" :alt="wallet.platform" class="w-4/12 mx-auto mb-0">
            <Clipboard header="Silahkan untuk melakukan transfer melalui rekening dibawah ini a.n. Hardianto Jouga Pratama" :content="wallet.number"></Clipboard>
          </div>
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>

import HeaderSection from '@/components/HeaderSection.vue'
import Clipboard from '@/components/Clipboard.vue'

const wallets = [
  {
    thumb: 'wallets/bca.png',
    platform: 'Bank BCA',
    number: '0885770946',
    alias: 'PRISMA.MAMA.LANA'
  }
]
</script>
