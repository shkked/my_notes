import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useModalStore = defineStore('modals', () => {
    // State
    const modalAuth = ref(false)
    const modalReg = ref(false)

    // Getters
    const getModalAuth = computed(() => modalAuth)
    const getModalReg = computed(() => modalReg)

    // Actions
    const setModalAuth = (value) => {
        modalAuth.value = value
    }
    const setModalReg = (value) => {
        modalReg.value = value
    }
    return { modalAuth, modalReg, setModalAuth, setModalReg, getModalAuth, getModalReg }
})