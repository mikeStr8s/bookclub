<script setup>
  import ArticleSummary from './ArticleSummary.vue';
  import { ref } from 'vue';
  import { getFirestore, collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore/lite'
  
  const db = getFirestore()

  const most_recent = ref([])

  const articlesRef = collection(db, 'articles')
  const mostRecentQuery = query(articlesRef, where('article_type', '==', 'post'), orderBy('date', 'desc'), limit(3))
  const qs = await getDocs(mostRecentQuery)
  qs.forEach((doc) => {
    most_recent.value.push({ id: doc.id, data: doc.data() })
  })

  let slide_idx = 0;

  runSlideshow()

  function showSlide(idx) {
    if (idx > 2) { slide_idx = 0 }
    else if (idx < 0) { slide_idx = 2 }
    else { slide_idx = idx }
    const article_elements = document.getElementsByClassName('recent')
    for (let i  = 0; i < article_elements.length; i++) { article_elements[i].style.display = 'none'}
    article_elements[slide_idx].style.display = 'block'
  }

  function runSlideshow() {
    const article_elements = document.getElementsByClassName('recent')
    const dots_elements = document.getElementsByClassName('dot')
    if (article_elements.length > 0) {
      for (let i  = 0; i < article_elements.length; i++) {
        article_elements[i].style.display = 'none'
        dots_elements[i].classList.remove('active')
      }
      article_elements[slide_idx].style.display = 'block'
      dots_elements[slide_idx].classList.add('active')
      slide_idx++
      if (slide_idx >= article_elements.length) { slide_idx = 0 }
      setTimeout(runSlideshow, 5000)
    } else {
      setTimeout(runSlideshow, 200)
    }
  }
</script>

<template>
  <div class="most-recent-container">
    <a href="">Most Recent</a>
    <div class="slider">
      <div class="most-recent-list">
        <ArticleSummary v-for="article in most_recent" :content="article.data.content" :date="article.data.date" :title="article.data.title"
        :ups="article.data.ups" :parent="article.data.parent" :comments="article.data.comments" :id="article.id"></ArticleSummary>
      </div>
      <div>
        <span v-for="(_, dot_idx) in most_recent" class="dot" @click="showSlide(dot_idx)"></span>
      </div>
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
    flex-direction: column;
    align-items: center;
  }
  
  .blog-btn {
    padding-left: 5px;
    padding-right: 5px;
  }

  .recent {
    display: none;
  }

  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #717171;
  }
</style>
