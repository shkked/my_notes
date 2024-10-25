<template>
    <a class="text-small link-page" id="link-page">
        <slot/>
    </a>
</template>

<style lang="scss">
#link-page{
    font-weight: 700;
}
.link-page{
    color: var(--green-light);
    cursor: pointer;
    &:hover{
        color: var(--white);
    }
}
</style>