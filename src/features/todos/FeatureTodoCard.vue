<script setup lang="ts">
import type { TTodo } from '@/entities';
import { computed } from 'vue';

export type FeatureTodoCardProps = {
  item: TTodo;
};

const { item } = defineProps<FeatureTodoCardProps>();
const emits = defineEmits<{
  edit: [documentId: string];
  modify: [documentId: string];
  view: [documentId: string];
  delete: [documentId: string];
}>();

const updatedAt = computed<string>(() => {
  const date = new Date(item.updatedAt);

  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
});

function handleEdit() {
  emits('edit', item.documentId);
}

function handleModify() {
  emits('modify', item.documentId);
}

function handleView() {
  emits('view', item.documentId);
}

function handleDelete() {
  emits('delete', item.documentId);
}
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content" :class="{ 'line-through': !!item.completed }">{{ item.todo }}</div>

      <hr />
      <time :datetime="item.updatedAt">Updated at: {{ updatedAt }}</time>
    </div>

    <footer class="card-footer">
      <a class="card-footer-item" @click="handleEdit">Edit</a>
      <a class="card-footer-item" @click="handleDelete">Delete</a>
    </footer>
  </div>
</template>

<style>
.line-through {
  text-decoration: line-through;
}
</style>
