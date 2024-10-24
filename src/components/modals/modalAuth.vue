<template>
    <div>
        <dialog 
        class="overlay overlay-auth" 
        ref="overlay-auth"
        >
        <div class="overlay__inner">
            <div class="overlay-header">
                <btnRound/>
            </div>
            <div class="overlay-body">
                <h2 class="h2">Вход в ваш аккаунт</h2>
                <section class="overlay-body__inner">
                   <form class="overlay__input-form w-100" method="POST" action="#">
                        <label for="" class="text-small">Email</label>
                        <inputForm 
                        nameInput="email"
                        typeInput="email" 
                        placeholder="Введите значение"
                        @changeInput="valueW"
                        />
                        <label for="" class="text-small">Пароль</label>
                        <inputForm 
                        nameInput="pass"
                        typeInput="pass" 
                        placeholder="Введите пароль"
                        @changeInput="valueW"
                        />
                   </form>
                   <div class="overlay-body__bottom w-100">
                    <div class="overlay-body__links">
                        <p class="text-small">У вас нет аккаунта?</p>
                        <linkPage/>
                    </div>
                    <btnPage>
                        <p class="text-normal">Войти</p>
                    </btnPage>
                   </div>
                </section>
            </div>
        </div>
    </dialog>
    </div>
</template>

<script>
import btnRound from '@/components/btnRoundPage.vue';
import linkPage from '@/components/linkPage.vue';
import btnPage from '@/components/btnPage.vue';
import inputForm from '@/components/inputForm.vue';
    export default {
        components: {btnRound, inputForm, btnPage, linkPage},
        data(){
            return {

            }
        },
        methods: {
            valueW(v){
                console.log(v)
            }
        }
    }
</script>

<style lang="scss">
.overlay{
    border-radius: 40px;
    background-color: var(--dark-middle);
    z-index: 1000;
    max-width: 100%;
    max-height: 100%;
    display: block;
    transition: all 0.3s linear;
    //visibility: hidden;
    border: unset;
    outline: unset;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    //opacity: 0;
    &[open]{
        transform: scale(1);
        opacity: 1;
        visibility: visible;
    }
    // padding: 0 10px;
    &:modal{
        max-width: 100%;
        max-height: 100%;
    }
    
    .overlay__inner{
        position: relative;
        padding: 80px;
        .overlay-header{
            position: absolute;
            right: 15px;
            top: 15px;
        }
        .overlay-body{
            h2{
                color: var(--white);
                margin-bottom: 40px;
            }
            .overlay-body__inner{
                display: flex;
                flex-direction: column;
                align-items: center;
                .overlay__input-form{
                    display: flex;
                    flex-direction: column;
                    label{
                        color: var(--gray);
                        margin-bottom: 8px;
                        padding-left: 30px;
                    }
                }
                .overlay-body__bottom{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
}
</style>