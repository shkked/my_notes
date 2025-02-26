<template>
    <header class="header">
        <div ref="qwewq" class="container">
            <a href="/">
                <img class="header-logo" src="/images/logo4x.png" alt="">
            </a>
                <btnPage @click="openModal">
                    <img class="button__img" src="/icons/login.svg" alt="arrow-icon">
                    <p class="text-normal">Вход</p>
                </btnPage>
        </div>
    </header>
    </template>

<script setup>
import { useModalStore } from '@/stores/modals';

const { setModalAuth } = useModalStore();
const openModal = () => {
    setModalAuth(true);
}
</script>

<style lang="scss" scoped>
.header{
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 136px;
        .header-logo{
            width: 218px;
            @media screen and (max-width: 450px) {
                width: 90%;
            }
        }
    }
}
</style>