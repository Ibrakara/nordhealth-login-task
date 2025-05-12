<template>
  <provet-stack
    class="success-page-container"
    justify-content="center"
    align-items="center"
  >
    <provet-card padding="l">
      <h1 slot="header">Success!</h1>
      <p>You have successfully signed up for the product.</p>
      <provet-button @click="$router.push('/')">
        <provet-icon slot="start" name="arrow-left-long"></provet-icon>
        Back
      </provet-button>
    </provet-card>
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
  max-width: 340px;
  margin: var(--n-space-xl) auto;
  text-align: center;
}
</style>
