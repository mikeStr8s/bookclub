<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'

  const email = ref('')
  const password = ref('')

  const rout = useRouter()
  const auth = getAuth()

  function login() {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => rout.push('/'))
      .catch(err => { 
        console.log(err.code)
        console.log(err.message)
      })
  }
</script>

<template>
  <main class="main">
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="login">Login</button>
  </main>
</template>

<style scoped></style>