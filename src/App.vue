<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import QuoteCard from './components/QuoteCard.vue';

const quotes = [
  {
    author: 'Jason Shetcham',
    quote: 'Что не убивает, делает сильнее',
  },
  {
    author: 'Alisa Yandex',
    quote: 'Я подумаю об этом завтра',
  },
  {
    author: 'Пользователь Алисы',
    quote: 'Алиса, скажи 300',
  },
];
</script>

<template>
  <main class="section columns">
    <!-- <QuoteCard :item="quotes[0]"></QuoteCard> -->

    <section v-for="quote in quotes" :key="quote.author" class="column">
      <QuoteCard :item="quote"></QuoteCard>
    </section>
  </main>

  <VueQueryDevtools />
</template>
