<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="email" v-model="email"></p>
    <p><input type="password" placeholder="password" v-model="password"></p>
    <p><button @click="register">Submit</button></p>
</template>
<script setup>
    import { ref } from 'vue'
    import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
    import { useRouter } from 'vue-router'

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    function register() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log('Successfully registered')
                router.push('/')
            })
            .catch(error => {
                console.log(error.code)
                alert(error.message)
            })
    }
</script>