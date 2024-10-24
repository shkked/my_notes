<template>
    <button type="button" class="button button-close">
        <div class="button-inner">
            <!-- <img src="icons/login.svg" alt="arrow-icon">
            <p class="text-normal">{{ title }}</p> -->
            <slot/>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

<style lang="scss">
.button-close{
    border-radius: 32px;
}
.button{
    border: none;
    background-color: var(--green-light);
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
    .button-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 24px;
        img{
            width: 32px;
            height: 32px;
            margin-right: 12px;
        }
        p{
            color: var(--white);
        }
    }
}
</style>