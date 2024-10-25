<template>
    <button @click="handleClick($event)" class="button button-close">
        <img class="button-close__img" src="/icons/close.svg" alt="close-button">
    </button>
</template>

<script>
export default {
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
}
</script>


<style lang="scss" scoped>
.button-close{
    border-radius: 50%;
    width: 56px;
    aspect-ratio: 1;
    .button-close__img{
        width: 16px;
        height: 16px;
    }
}
.button{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>