<script setup>
  import { ref } from 'vue';
  import { marked } from 'marked'

  const props = defineProps({
    content: String,
    date: Number,
    title: String,
    ups: Number,
    parent: String,
    comments: Number,
    id: String
  })

  const content = ref('')
  content.value = props.content

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
    <div class="content-container" v-html="marked.parse(content)"></div>
    <div class="article-summary">
      <RouterLink :to="{ name: 'article', params: { id: props.id }}">{{ props.comments }} Comment/s</RouterLink>
      <!-- <a :href="`article/${props.id}`">{{ props.comments }} Comment/s</a> -->
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

  .content-container {
    position: relative;
    max-height: 200px;
    overflow-y: hidden;
  }

  .content-container::after {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    bottom: 0;
    background: linear-gradient(to top, rgb(255, 255, 255) 10%, rgba(255,255,255,0) 40%);
    pointer-events: none;
  }
</style>
