<script setup>
  import { ref } from 'vue'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { useRouter } from 'vue-router'


  const isLoggedIn = ref(false)

  const rout = useRouter()
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })

  function logout() {
    auth.signOut()
    rout.push('/')
  }
</script>

<template>
  <header class="header">
    <div>
      <RouterLink to="/" class="header-title">Blasted Book Blog</RouterLink>
      <!-- <span class="header-author"> by Sigath</span> -->
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/create" v-if="isLoggedIn">Create</RouterLink>
      <RouterLink to="/register" v-if="!isLoggedIn">Create Account</RouterLink>
      <RouterLink to="/login" v-if="!isLoggedIn">Login</RouterLink>
      <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
    </nav>
  </header>
  <RouterView />
  <footer class="footer">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <span>Copyright &copy; 2022 Blasted Book Blog</span>
  </footer>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    height: 100px;
    padding-bottom: 10px;

    border-style: solid;
    border-color: var(--color-accent);
    border-width: 0px 0px 5px 0px;
  }
  .header-title {
    font-weight: 400;
    font-size: 20px;
    color: var(--color-text);
  }

  .header-author {
    color: var(--color-text);
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    color: var(--color-text-lite);
  }
</style>