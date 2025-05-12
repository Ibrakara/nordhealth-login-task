<template>
  <provet-stack
    class="success-page-container"
    justify-content="center"
    align-items="center"
  >
    <provet-icon
      size="xxl"
      name="interface-checked-circle"
      color="var(--n-color-status-success)"
    ></provet-icon>
    <h1>Success!</h1>
    <p>You have successfully signed up for the product.</p>

    <provet-button data-test-id="back-button" @click="$router.push('/')">
      <provet-icon slot="start" name="arrow-left-long"></provet-icon>
      Back
    </provet-button>
  </provet-stack>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
useHead({
  title: "Success",
});
</script>

<style scoped>
.success-page-container {
  max-width: 440px;
  margin: var(--n-space-xl) auto;
  text-align: center;
  box-shadow: var(--n-box-shadow-dark);
  padding: var(--n-space-m);
}
</style>
