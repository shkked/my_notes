<template>
    <button class="button button-page" @click="handleClick($event)">
        <slot/>
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

<style lang="scss">
.button-page{
    border-radius: 32px;
}
.button{
    border: none;
    background-color: var(--green-light);
    display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 24px;
    &:hover{
        cursor: pointer;
        background-color: var(--green-middle);
    }
    &:active{
        background-color: var(--green-dark);
    }
    &[disabled]{
        background-color: var(--gray);
    }
        .button__img{
            width: 32px;
            height: 32px;
            margin-right: 12px;
        }
        p{
            color: var(--white);
        }
}
</style>