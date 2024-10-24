<template>
    <button type="button" class="button button-close">
        <img src="/icons/close.svg" alt="close-button">
    </button>
</template>

<style lang="scss" scoped>
.button-close{
    border-radius: 50%;
    width: 56px;
    aspect-ratio: 1;
}
.button{
    display: flex;
    align-items: center;
    justify-content: center;
    .button__close-btn{
        background: none;
        border: none;
        img{
            width: 16px;
            height: 16px;
        }
    }
}
</style>