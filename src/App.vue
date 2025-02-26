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

<script setup>
import { useModalStore } from '@/stores/modals';
import { watch } from 'vue'

const { getModalAuth, getModalReg, setModalAuth, setModalReg } = useModalStore();
const modalData = getModalAuth || getModalReg;

watch(modalData, () => {
      if(modalData){
        // document.querySelector('html').style.overflow = 'hidden';
      }
})
const closeModal = () => {
    setModalAuth(false);
    setModalReg(false);
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
