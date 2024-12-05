<script setup lang="ts">
const props = defineProps<{
  item: { quote: string; author: string };
}>();
</script>

<template>
  <div class="card">
    <div class="card-content">
      <p class="title">“{{ props.item.quote }}”</p>
      <p class="subtitle">{{ props.item.author }}</p>
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
</template>
