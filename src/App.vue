<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import QuoteForm from './QuoteForm.vue';
import { ref } from 'vue';

const quotes = ref([
  {
    id: 1,
    quote: 'Smoasmd',
    author: 'Socrat',
  },

  {
    id: 2,
    quote: 'Smoasmd',
    author: 'Jim Kerry',
  },
]);
const editQuite = ref(null);

function addQuote(newQuote: { author: string; quote: string }) {
  // console.log(newQuote);
  if (newQuote.id) {
    const idx = quotes.value.findIndex((item) => item.id === newQuote.id);
    quotes.value[idx] = { ...newQuote };
  } else {
    quotes.value.push({ id: Math.floor(Math.random() * (10000 - 1 + 1) + 1), ...newQuote });
  }
}

function startEdit(quoteForEdit) {
  editQuite.value = { ...quoteForEdit };
}
</script>

<template>
  <QuoteForm :item="editQuite" @submit="addQuote"></QuoteForm>

  <main class="section columns">
    <section class="column box" v-for="quote in quotes" :key="quote.author">
      {{ quote.quote }}

      <button class="button is-link" @click="startEdit(quote)">Edit</button>
    </section>
  </main>

  <VueQueryDevtools />
</template>
