import { defineStore } from 'pinia'

export const useModalStore = defineStore('modals', {
    state: () => ({ 
        modalAuth: false,
        modalReg: false
    }),
    getters: {
        getModalAuth: (state) => state.modalAuth,
        getModalReg: (state) => state.modalReg
    },
    actions: {
        setModalAuth(value) {
            this.modalAuth = value
        },
        setModalReg(value) {
            this.modalReg = value
        },
    }
})