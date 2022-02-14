<template>
  <div class="parent-input">
    <label :for="id" class="label">{{ label }}</label>
    <input
      v-if="type !== 'text-area'"
      :id="id"
      :name="name"
      :required="required"
      :type="type"
      :value="modelValue"
      class="input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <textarea
      v-else
      :id="id"
      :name="name"
      :required="required"
      :type="type"
      :value="modelValue"
      class="input text-area"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
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
      default: false,
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
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

.parent-input {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.input {
  border-radius: 7px;
  background: var(--background-color);
  border: var(--block-border);
  color: var(--text-color);

  padding: 0.5rem;
}

.text-area {
  resize: vertical;
  min-height: 100px;
  max-height: 200px;
}
</style>
