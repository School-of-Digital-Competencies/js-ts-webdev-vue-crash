<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { ref } from 'vue';

const quotes = ref([
  {
    quote: 'Smoasmd',
    author: 'Socrat',
  },

  {
    quote: 'Smoasmd',
    author: 'Jim Kerry',
  },
]);

const newQuote = ref({
  author: '',
  quote: '',
});

function addQuote() {
  quotes.value.push(newQuote.value);
  console.log(quotes.value);
}
</script>

<template>
  <div class="section columns">
    <div class="field">
      <label class="label">Author</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="newQuote.author" />
      </div>
      <p class="help">Enter author</p>
    </div>

    <div class="field">
      <label class="label">Quote</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="newQuote.quote" />
      </div>
      <p class="help">Enter quote</p>
    </div>

    <button class="button is-primary" @click="addQuote">Primary</button>
  </div>

  <main class="section columns">
    <section class="column box" v-for="quote in quotes" :key="quote.author">
      {{ quote.quote }}
    </section>
  </main>

  <VueQueryDevtools />
</template>
