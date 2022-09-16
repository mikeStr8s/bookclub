<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="title" v-model="title"></p>
    <p><input type="textarea" v-model="body"></p>
    <p><button @click="submit">Submit</button></p>
</template>
<script setup>
    import { ref } from 'vue'
    import { getAuth } from 'firebase/auth'
    import { getFirestore, collection, addDoc } from 'firebase/firestore/lite'
    import { useRouter } from 'vue-router'

    const title = ref('')
    const body = ref('')
    const router = useRouter()

    function submit() {
        const auth = getAuth();
        if (auth.currentUser) {
            const db = getFirestore()
            addDoc(collection(db, 'posts'), { title: title.value, body: body.value, date: Date.now() })
            .then(data => {
                console.log(data)
                console.log('successfully posted')
                router.push('/')
            }).catch(error => {
                console.error(error)
            })
        }
    }
</script>