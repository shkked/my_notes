<template>
  <div id="app">
    <headerPage/>
    <main>
      <div class="container">
        <p style="color: red">
          {{ [getModalAuth, getModalReg] }}
        </p>
        <router-view/>
      </div>
    </main>
    <div v-if="getModalAuth || getModalReg" id="overlay" @click.self="closeModal"></div>
    <modalAuth v-show="getModalAuth"/>
    <modalReg v-show="getModalReg"/>
  </div>
</template>

<script>
import { useModalStore } from '@/stores/modals';
import { mapState } from 'pinia';
export default {
  computed: {
    ...mapState(useModalStore, ['getModalAuth', 'getModalReg'])
  },
  watch: {
    getModalAuth(){
      if(this.getModalAuth){
        // document.querySelector('html').style.overflow = 'hidden';
      }
    }
  },
  methods: {
    closeModal(){
      useModalStore().setModalReg(false);
      useModalStore().setModalAuth(false);
    }
  }
}
</script>

<style lang="scss">
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>
