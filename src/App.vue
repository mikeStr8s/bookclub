<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { ref } from 'vue';

const router = useRouter()
const isLoggedIn = ref(false)
const auth = getAuth()

auth.onAuthStateChanged(user => {
  if (user) {
    isLoggedIn.value = true
  } else {
    isLoggedIn.value = false
  }
})

function signOut() {
  auth.signOut()
  router.push('/')
}
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <span v-if="isLoggedIn"><button @click="signOut">Logout</button></span>
        <span v-else>
          <RouterLink to="/sign-in">Login</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
        </span>
        <RouterLink to="/create">Create</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer class="footer"></footer>
</template>

<style scoped>
  .header {
    height: 100px;
  }

  .footer {
    height: 100px;
  }
</style>
