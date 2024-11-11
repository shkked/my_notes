<template>
    <button class="button button-page">
        <slot/>
    </button>
</template>

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