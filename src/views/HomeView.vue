<script setup>
  import MostRecent from '../components/MostRecent.vue'
import CreatePost from '../components/CreatePost.vue';
import DropdownSelect from '../components/DropdownSelect.vue';
</script>

<template>
  <main>
    <Suspense>
      <MostRecent/>
    </Suspense>
    <CreatePost/>
    <DropdownSelect/>
    
  </main>
</template>
