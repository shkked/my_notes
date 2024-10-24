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

<style lang="scss" scoped>
@import "@/assets/_media.scss";
.home-main{
    margin-top: 5rem;
    .home-main__inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include desktop{
            flex-direction: column;
            align-items: center;
        }
        .home-main__text{
            margin-right: 5rem;
            @include desktop{
                margin-right: 0;
                margin-bottom: 5rem;
                text-align: center;
            }
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1{
                margin-bottom: 40px;
                color: var(--white);
                text-align: center;
                @media screen and (max-width: 480px) {
                    font-size: 60px;
                    line-height: 64px;
                }
            }
            h3{
                color: var(--gray);
                @media screen and (max-width: 480px) {
                    font-size: 24px;
                    line-height: 36px;
                }
            }
        }
        .home-main__img{
            width: 55%;
            @include desktop{
                width: 100%;
            }
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .home-main__background{
                position: absolute;
                width: 110%;
                left: -4%;
                top: -7%;
            }
            .home-main__objects{
                position: relative;
                top: 80px;
                width: 85%;
                z-index: 20;
            }
        }
    }
}
</style>