<template>
    <header class="header">
        <div class="container">
            <img class="header-logo" src="/images/logo4x.png" alt="">
            <my-btn :title="'Вход'"/>
        </div>
    </header>
    </template>

<script>
import btn from '@/components/btn.vue';
    export default {
        components: {
            'my-btn': btn
        }
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
        }
    }
}
</style>