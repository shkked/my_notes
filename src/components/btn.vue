<template>
    <button class="button">
        <div class="button-inner">
            <img src="icons/login.svg" alt="arrow-icon">
            <p class="text-normal">{{ title }}</p>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            title: String
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss">
.button{
    border-radius: 32px;
    border: 1px solid black;
    background-color: var(--green-light);
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