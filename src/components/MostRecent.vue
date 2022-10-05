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

  const t1 = ref("Title1")
  const t2 = ref("Title2")
  const t3 = ref("Title3")

  let slide_idx = 0;  

  function advanceSlide(idx) {
    slide_idx = slide_idx + idx
    showSlide(slide_idx)
  }

  function showSlide(idx) {
    if (idx > 2) { slide_idx = 0 }
    if (idx < 0) { slide_idx = 2 }
    const article_elements = document.getElementsByClassName('recent')
    for (let i  = 0; i < article_elements.length; i++) { article_elements[i].style.display = 'none'}
    article_elements[slide_idx].style.display = 'block'
  }
</script>

<template>
  <div class="most-recent-container">
    <a href="">Most Recent</a>
    <div class="slider">
      <button class="blog-btn" @click="advanceSlide(-1)">&lt;</button>
      <div class="most-recent-list">
        <ArticleSummary style="display:block;" :content="most_recent.content" :date="most_recent.date" :title="t1"
        :ups="most_recent.ups" :parent="most_recent.parent" :comments="most_recent.comments"></ArticleSummary>
        <ArticleSummary :content="most_recent.content" :date="most_recent.date" :title="t2"
        :ups="most_recent.ups" :parent="most_recent.parent" :comments="most_recent.comments"></ArticleSummary>
        <ArticleSummary :content="most_recent.content" :date="most_recent.date" :title="t3"
        :ups="most_recent.ups" :parent="most_recent.parent" :comments="most_recent.comments"></ArticleSummary>
      </div>
      <button class="blog-btn" @click="advanceSlide(1)">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
  .most-recent-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .most-recent-list {
    flex-direction: row;
  }

  .slider {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .blog-btn {
    padding-left: 5px;
    padding-right: 5px;
  }

  .recent {
    display: none;
  }
</style>
