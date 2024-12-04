<script setup lang="ts">
import type { TTodo } from '@/entities';
import { computed } from 'vue';

export type AppTodoCardProps = {
  item: TTodo;
};

const { item } = defineProps<AppTodoCardProps>();
const emits = defineEmits<{
  edit: [documentId: string];
  delete: [documentId: string];
}>();

const updatedAt = computed<string>(() => {
  const date = new Date(item.updatedAt);

  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
});

function handleEdit() {
  emits('edit', item.documentId);
}

function handleDelete() {
  emits('delete', item.documentId);
}
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ item.todo }}

        <hr />
        <time :datetime="item.updatedAt">Updated at: {{ updatedAt }}</time>
      </div>
    </div>

    <footer class="card-footer">
      <a class="card-footer-item" @click="handleEdit">Edit</a>
      <a class="card-footer-item" @click="handleDelete">Delete</a>
    </footer>
  </div>
</template>
