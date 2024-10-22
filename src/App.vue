<template>
  <div id="app">
    <HeaderPage/>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderPage from '@/components/headerPage.vue';
export default {
  components: {
    HeaderPage
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
  
</style>
