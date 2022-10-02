<script setup>
import ArticleSummary from './ArticleSummary.vue';
import { ref } from 'vue';

const most_recent = ref({
  content: `You are Rustopherson, a wizard living in the kingdom of Larion. You have a staff and a spellbook.
  You finish your long journey and finally arrive at the ruin you've been looking for.
  You have come here searching for a mystical spellbook of great power called the book of essence.
  You look around and see no one in the area.
  You know the danger of the open plains and the undead marauders that dwell there, so you don't stay in one place too long.`,
  date: 1663876271133,
  title: 'The Tale as Old as Time Or: How I Really Forgot What I',
  ups: 123,
  // tags: ['fantasy', 'silly-billy', 'absolute-menace'],
  parent: '/',
  comments: 3
})

</script>

<template>
<div class="most-recent-container">
  <a href="">Most Recent</a>
  <div class="most-recent-list">
    <ArticleSummary :content="most_recent.content" :date="most_recent.date" :title="most_recent.title"
    :ups="most_recent.ups" :parent="most_recent.parent" :comments="most_recent.comments"></ArticleSummary>
  </div>
</div>
</template>

<style scoped>
</style>
