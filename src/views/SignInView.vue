<template>
    <h1>Login to Your Account</h1>
    <p><input type="text" placeholder="email" v-model="email"></p>
    <p><input type="password" placeholder="password" v-model="password"></p>
    <p><button @click="signIn">Submit</button></p>
</template>
<script setup>
    import { ref } from 'vue'
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
    import { useRouter } from 'vue-router'

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    function signIn() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                console.log('Successfully logged in')
                router.push('/')
            })
            .catch(error => {
                console.log(error.code)
                alert(error.message)
            })
    }
</script>