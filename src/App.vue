<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';

const quote = {
  author: 'Socrat',
  quote: 'Чем больше я знаю, тем больше я понимаю, что я ничего не знаю',
};
</script>

<template>
  <main class="section columns">
    <section class="column">
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
    </section>
  </main>

  <VueQueryDevtools />
</template>
