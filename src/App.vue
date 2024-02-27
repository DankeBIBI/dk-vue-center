<script  lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'app',
    created: async () => {
      try{
      axios.get('https://api.dankebibi.cc')
      }catch(e){console.error(e);}
    }
})
</script>
<template>
    <router-view />
</template>

<style scoped></style>
