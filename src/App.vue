<script  lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import {checkIsMobile} from './layout/layout.config' 
export default defineComponent({
    name: 'app',
    created: async () => {
      try{
      axios.get('https://api.dankebibi.cc')
      }catch(e){console.error(e);}
      window.addEventListener('resize',checkIsMobile)
    }
})
</script>
<template>
    <router-view />
</template>

<style scoped></style>
