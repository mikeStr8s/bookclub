<template>
    <div class="dropdown-container">
        <button class="dropdown-button" @click="toggleDropdown">Choose Article</button>
        <div class="dropdown-content">
            <input class="dropdown-input" ref="input" type="text" placeholder="Search...">
            <li v-for="article in articles">{{ article.title }}</li>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { getFirestore, collection, query, orderBy, where, getDocs } from 'firebase/firestore/lite'

    const articles = ref([])

    const db = getFirestore()
    const q = query(collection(db, 'articles'), orderBy('date', 'desc'), where('article_type', '==', 'post'))
    
    async function toggleDropdown() {
        const snapshot = await getDocs(q)
        if (!snapshot.empty) {
            articles.value = []
            snapshot.forEach((doc) => {
                console.log(doc.data())
                articles.value.push(doc.data())
            })
        }
    }
</script>