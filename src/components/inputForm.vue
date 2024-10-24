<template>
        <input 
        name="nameInput"
        class="text-normal input-form__input"
        :type="typeInput" 
        required 
        :placeholder="placeholder" 
        v-model="changeValue">
</template>

<script>
    export default {
        props: {
            nameInput: String,
            typeInput: String, 
            placeholder: String,
        },
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
    border: unset;
    &:active{
        border: 1px solid;
        border-color: var(--green-light);
    }
    &:hover{
        border: 1px solid;
        border-color: var(--green-light);
    }
}
</style>