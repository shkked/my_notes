<template>
    <input class="text-normal input-form__input" required v-model="changeValue">
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        computed: {
            changeValue: {
                get(){
                    return this.value
                },
                set(changeValue) {
                    this.$emit('changeInput', changeValue)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.input-form__input{
    color: var(--dark);
    border-radius: 36px;
    height: 72px;
    padding-left: 30px;
    outline: unset;
    margin-bottom: 24px;
    border: 1px solid;
    &:focus{
        border: 1px solid;
        border-color: var(--green-light);
    }
    &:hover{
        border: 1px solid;
        border-color: var(--green-light);
    }
}
</style>