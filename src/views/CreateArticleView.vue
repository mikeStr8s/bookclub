<script setup>
  // import { ref } from 'vue'
  // import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  // import { useRouter } from 'vue-router'
  import { marked } from 'marked'
  import { ref } from 'vue';

  const text = ref('')
  
</script>

<template>
  <main class="main">
    <div class="editor-container">
      <textarea class="text-input" v-model="text"></textarea>
      <div class="rendered-text">
        <div class="marked-text" v-html="marked.parse(text)"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  flex-grow: 1;
}

.editor-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

.text-input {
  flex-grow: 1;
}

.rendered-text {
  flex-grow: 1;
}

.marked-text {
  width: auto;
}
</style>