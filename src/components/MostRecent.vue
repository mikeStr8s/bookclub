<template>
    <p><strong>Most Recent Post</strong></p>
    <p class="post-title">{{ title }}</p>
    <p class="post-body">{{ body }}</p>
</template>

<script setup>
    import { ref } from 'vue'
    // import { getAuth } from 'firebase/auth'
    import { getFirestore, collection, query, orderBy, limit, getDocs } from 'firebase/firestore/lite'
    // import { useRouter } from 'vue-router'

    const title = ref('')
    const body = ref('')
    const date = ref()
    // const router = useRouter()

    const db = getFirestore()
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'), limit(1))
    const snapshot = await getDocs(q)
    snapshot.forEach((doc) => {
        const data = doc.data()
        title.value = data.title
        body.value = data.body
    })
</script>

<style scoped>

</style>
    