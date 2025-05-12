<template>
  <provet-input
    v-model="value"
    :name="name"
    :label="label"
    :expand
    :required
    :hide-required="hideRequired"
    :type
    :placeholder
    :error="errorMessage"
  >
    <slot></slot>
  </provet-input>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import type { InputType } from "~/types/types";
interface Props {
  name: string;
  label?: string;
  expand?: boolean;
  required?: boolean;
  hideRequired?: boolean;
  type?: InputType;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  expand: true,
  required: false,
  hideRequired: false,
  type: "text",
  placeholder: "",
  label: "",
});

const { value, errorMessage } = useField(() => props.name);
</script>
