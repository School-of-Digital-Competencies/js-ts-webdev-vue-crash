<script setup lang="ts">
import { ref } from 'vue';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';

const quote = ref({
  author: '',
  quote: '',
});

function updateAuthor(event) {
  quote.value.author = event.target.value;
}
</script>

<template>
  <main class="section columns">
    <input type="text" class="input" :value="quote.author" @input="updateAuthor" />

    <input type="text" class="input" v-model="quote.quote" />

    <div class="card">
      <div class="card-content">
        <p class="title">“{{ quote.quote }}”</p>
        <p class="subtitle">{{ quote.author }}</p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            View on
            <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
          </span>
        </p>
        <p class="card-footer-item">
          <span> Share on <a href="#">Facebook</a> </span>
        </p>
      </footer>
    </div>
  </main>

  <VueQueryDevtools />
</template>
