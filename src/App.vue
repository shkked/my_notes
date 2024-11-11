<template>
  <div id="app">
    <headerPage/>
    <main>
      <div class="container">
        <router-view/>
        <div id="overlay"></div>
      </div>
    </main>
    <modalAuth/>
  </div>
</template>

<script>
import headerPage from '@/components/headerPage.vue';
// import modalReg from '@/components/modals/modalReg.vue';
import modalAuth from '@/components/modals/modalAuth.vue';
export default {
  components: {
    headerPage, 
    modalAuth
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
