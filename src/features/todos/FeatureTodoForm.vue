<script setup lang="ts">
import { type TTodo, type TTodoEdit } from '@/entities';
import { ref, watch } from 'vue';

export type FeatureTodoFormProps = {
  item?: Readonly<TTodo>;
};

const props = defineProps<FeatureTodoFormProps>();
const emits = defineEmits<{
  submit: [value: TTodoEdit];
}>();

const todo = ref<TTodoEdit>({
  completed: props.item?.completed || false,
  todo: props.item?.todo || '',
});

watch(
  () => props.item,
  (newValue) => {
    todo.value = {
      completed: newValue?.completed || false,
      todo: newValue?.todo || '',
    };
  },
);

function submit() {
  emits('submit', todo.value);
}
</script>

<template>
  <form class="box" @submit.prevent="submit">
    <div class="field">
      <label class="label" for="todo-todo">Todo</label>
      <div class="control">
        <input id="todo-todo" class="input" type="text" placeholder="Enter todo text" v-model="todo.todo" />
      </div>
    </div>

    <div class="field">
      <label class="checkbox" for="todo-completed">
        <input type="checkbox" id="todo-completed" v-model="todo.completed" />
        Completed
      </label>
    </div>

    <button class="button is-primary" type="submit">Save todo</button>
  </form>
</template>
