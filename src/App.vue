<script setup lang="ts">
import { WidgetTodoAdd, WidgetTodos } from '@/widgets';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>

<template>
  <main class="section columns">
    <section class="column is-one-third">
      <WidgetTodoAdd></WidgetTodoAdd>
    </section>

    <section class="column">
      <WidgetTodos></WidgetTodos>
    </section>
  </main>

  <VueQueryDevtools />
</template>
