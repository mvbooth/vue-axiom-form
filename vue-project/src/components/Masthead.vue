<script setup lang="ts">
defineProps<{
  heading: string,
  subheading: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ heading }}</h1>
    <p>{{ subheading }}</p>
  </div>
</template>
