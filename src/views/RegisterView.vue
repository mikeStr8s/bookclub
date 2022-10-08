<script setup>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'

  const email = ref('')
  const password = ref('')

  const rout = useRouter()
  const auth = getAuth()

  function register() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => { rout.push('/home') })
      .catch(err => { console.log(err.code, err.message) })
  }
</script>

<template>
  <main class="main">
    <h1>Create Account</h1>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="register">Submit</button>
  </main>
</template>

<style scoped></style>