<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['modal-close']);

const target = ref(null);

onClickOutside(target, () => emit('modal-close'));
</script>

<template>
  <div
    v-if="isOpen"
    class="modal"
    :class="{
      'is-active': !!isOpen,
    }"
  >
    <div class="modal-background"></div>

    <div class="modal-card" ref="target">
      <header class="modal-card-head">
        <h4 class="modal-card-title">
          <slot name="header"> </slot>
        </h4>
      </header>

      <section class="modal-card-body">
        <slot name="content"> </slot>
      </section>
    </div>
  </div>
</template>
