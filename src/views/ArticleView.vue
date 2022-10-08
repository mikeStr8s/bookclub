<script setup>
  import { useRouter } from 'vue-router'
  import { getFirestore, doc, query, where, orderBy, limit, getDoc } from 'firebase/firestore/lite'
  import { ref } from 'vue';
  import { marked } from 'marked'

  const props = defineProps({
    id: String
  })
  
  const rout = useRouter()
  const db = getFirestore()

  const rendered = ref('')
  
  const docRef = doc(db, 'articles', props.id)
  const docSnap = await getDoc(docRef)

  rendered.value = marked.parse(docSnap.data().content)

  // console.log(docSnap.value.data())
</script>

<template>
  <main class="main">
    <div class="content" v-html="rendered"></div>
  </main>
</template>

<style scoped></style>