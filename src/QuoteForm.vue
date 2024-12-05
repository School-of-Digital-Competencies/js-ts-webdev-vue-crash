<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  item: {
    author: string;
    quote: string;
  };
}>();
const emits = defineEmits<{
  submit: [
    newQuote: {
      author: string;
      quote: string;
    },
  ];
}>();

const newQuote = ref(props.item || { author: '', quote: '' });

watch(
  () => props.item,
  (newValue) => {
    newQuote.value = { ...newValue };
  },
);

function addQuote() {
  emits('submit', newQuote.value);
  //   quotes.value.push(newQuote.value);
}
</script>

<template>
  <div class="section columns">
    {{ props.item }}
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
</template>
