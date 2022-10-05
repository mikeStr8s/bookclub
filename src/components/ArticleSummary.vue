<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    content: String,
    date: Number,
    title: String,
    ups: Number,
    parent: String,
    comments: Number
  })

  const content = ref('')
  content.value = props.content.substring(0, 249) + '...'

  const date = ref('')
  const date_obj = new Date(props.date)
  date.value = date_obj.toLocaleDateString( 'en-us',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

</script>

<template>
  <div class="recent">
    <h3>{{ props.title }}</h3>
    <span class="date">{{ date }}</span>
    <p class="post-body">{{ content }}</p>
    <div class="article-summary">
      <a href="">{{ props.comments }} Comment/s</a>
      <!-- <input type="checkbox" name="ups-input" id="ups-input"> -->
      <span>{{ props.ups }} ↑</span>
    </div>
  </div>
</template>

<style scoped>
  .article-summary {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
</style>
