<template>
    <p><strong>Most Recent Post</strong></p>
    <p class="post-title">{{ title }}</p>
    <p class="post-body" v-html="body"></p>
</template>

<script setup>
    import { ref } from 'vue'
    import { getFirestore, collection, query, orderBy, limit, where, getDocs } from 'firebase/firestore/lite'
    import { marked } from 'marked'

    const title = ref('')
    const body = ref('')

    const db = getFirestore()
    const q = query(collection(db, 'articles'), orderBy('date', 'desc'), where('article_type', '==', 'post'), limit(1))
    const snapshot = await getDocs(q)
    snapshot.forEach((doc) => {
        const data = doc.data()
        title.value = data.title
        body.value = marked.parse(data.content)
    })
</script>

<style scoped>

</style>
    