<template>
  <label class="label" :for="id">{{ label }}</label>
  <input
    class="input"
    v-if="type != 'textarea' && type != 'select'"
    :type="type"
    :required="required"
    :id="id"
    :disabled="disable"
    :value="modelValue"
    :name="name"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },

    required: {
      type: Boolean,
      required: false,
      defalut: false,
    },

    label: {
      required: true,
      type: String,
    },

    id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    modelValue: {
      type: [String, Number],
      required: false,
      default: "",
    },
  },
});
</script>

<style>
.label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.input {
  border-radius: 7px;
  background: var(--background-color);
  border: var(--block-border);
  color: var(--text-color);
}
</style>
