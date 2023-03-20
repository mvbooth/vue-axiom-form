<script setup lang="ts">
defineProps<{
  heading: string,
  subheading: string
}>()
</script>

<template>
  <div class="masthead">
    <h1>{{ heading }}</h1>
    <p>{{ subheading }}</p>
  </div>
</template>

<style scoped>
  .masthead {
    background-image: url(../assets/comparison_bg1.png);
    min-height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
  h1 {
    font-size: 36px;
  }
  p {
    font-size: 23px;
  }
  h1,p {
    margin: 0;
  }
</style>
