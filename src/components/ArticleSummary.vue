<script setup>

const props = defineProps({
  content: String,
  date: Number,
  title: String,
  ups: Number,
  parent: String,
  comments: Number
})
</script>

<template>
<div class="recent">
  <h3>{{ props.title }}</h3>
  <span class="date">{{ props.date }}</span>
  <p class="post-body">{{ props.content }}</p>
  <div class="article-summary">
    <a href="">{{ props.comments }} Comment/s</a>
    <!-- <input type="checkbox" name="ups-input" id="ups-input"> -->
    <span>{{ props.ups }}</span>
  </div>
</div>
</template>

<style scoped>
</style>
