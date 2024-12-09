<script setup lang="ts">
import { WidgetTodoAdd, WidgetTodos } from '@/widgets';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
</script>

<template>
  <main class="section columns">
    <section class="column is-two-thirds">
      <WidgetTodoAdd></WidgetTodoAdd>
    </section>

    <section class="column">Some</section>

    <section class="column is-one-third">
      <WidgetTodos></WidgetTodos>
    </section>

    <section class="column">Some</section>
  </main>

  <VueQueryDevtools />
</template>
