<script setup>
  import { marked } from 'marked'
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { getFirestore ,collection, addDoc } from 'firebase/firestore/lite'

  const text = ref('')
  const title = ref('')
  
  const rout = useRouter()
  const db = getFirestore()

  async function create() {
    const docRef = await addDoc(collection(db, 'articles'), {
      title: title.value,
      content:text.value,
      date: Date.now(),
      ups: 0,
      article_type: 'post'
    })
  }
</script>

<template>
  <main class="main">
    <input type="text" placeholder="Title" v-model="title">
    <div class="editor-container">
      <textarea class="text-input" v-model="text"></textarea>
      <div class="rendered-text">
        <div class="marked-text" v-html="marked.parse(text)"></div>
      </div>
    </div>
    <button @click="create">Submit</button>
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