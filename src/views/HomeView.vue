<script setup>
  import MostRecent from '../components/MostRecent.vue';
</script>

<template>
  <main class="main">
    <div class="welcome-container">
      <div class="welcome">
        <h2 class="header">Breath Deep and Relax, Welcome to my Blog.</h2>
        <h3 class="subheader">I read books that sound fun for whatever reason.</h3>
        <p class="summary">Take a look around the site! Maybe I have an article on a book you like, an opinion you want to argue over, or a rant on something narratively inconsequential. Whatever your speed, click below to start browsing.</p>
        <a href="" class="blog-btn button">Browse Articles</a>
      </div>
      <MostRecent class="most-recent"></MostRecent>
    </div>
    <h2></h2>
  </main>
</template>

<style scoped>
  .welcome-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .welcome {
    width: 50%;
    flex-grow: 1;
  }

  .most-recent {
    width: 50%;
    flex-grow: 1;
  }

  .welcome > .header {
    font-size: 75px;
    color: var(--color-text);
  }

  .welcome > .subheader {
    font-size: 25px;
    color: var(--color-background-soft);
  }

  .welcome > .summary {
    margin-top: 25px;
    font-size: 17px;;
  }

  .welcome > .button {
    margin-top: 20px;
  }
</style>
