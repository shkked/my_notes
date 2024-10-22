<template>
    <section class="home-main"> 
        <div class="home-main__inner">
            <div class="home-main__text">
                <h1 class="h1">Мои заметки</h1>
                <h3 class="h3">Не забывай о важном, храни его в облаке.</h3>
            </div>
            <div class="home-main__img">
                <img class="home-main__background" src="/images/homeview/background.svg" alt="background">
                <img class="home-main__objects" src="/images/homeview/objects.png" alt="objects">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.home-main{
    padding: 106px 80px;
    .home-main__inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .home-main__text{
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1{
                margin-bottom: 40px;
                color: var(--white);
            }
            h3{
                color: var(--gray);
            }
        }
        .home-main__img{
            position: relative;
            .home-main__background{
                position: absolute;
                width: 130%;
                left: 0;
                top: 0;
                z-index: 0;
                aspect-ratio: 1;
            }
            .home-main__objects{
                width: 100%;
                z-index: 20;
                
            }
        }
    }
}
</style>