<template>
        <dialog 
        class="overlay overlay-auth" 
        ref="overlay_auth"
        id="overlay_auth"
        >
        <div class="overlay__inner h-100">
            <div class="overlay-header">
                <btnRound @click="closeModal"/>
            </div>
            <div class="overlay-body h-100">
                <h2 class="h2">Вход в ваш аккаунт</h2>
                <section class="overlay-body__inner h-100">
                   <form class="overlay__input-form h-100 w-100" method="POST" action="#">
                        <label for="email" class="text-small">Email</label>
                        <inputForm 
                        name="email"
                        type="email"
                        placeholder="Введите значение"
                        />
                        <label for="pass" class="text-small">Пароль</label>
                        <inputForm 
                        name="pass"
                        type="pass" 
                        placeholder="Введите пароль"
                        />
                        <div class="overlay-body__bottom w-100">
                            <div class="overlay-body__bottom-inner w-100">
                                <div class="overlay-body__links">
                                    <p class="text-small">У вас нет аккаунта?</p>
                                    <linkPage>Зарегистрируйтесь</linkPage>
                                </div>
                                <btnPage 
                                @click="sendQuery" 
                                class="overlay-body__bottom-btn"
                                type="submit"
                                >
                                    <p class="text-normal">Войти</p>
                                </btnPage>
                            </div>
                            <div v-if="error" class="overlay-form__error text-small">
                                {{ error }}
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </dialog>
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
                email: '',
                pass: '',
                error: ''
            }
        },
        methods: {
            closeModal(){
                this.$refs.overlay_auth.close();
                document.getElementById('overlay').style.display = 'none';
                document.querySelector('html').style.overflow = 'auto';
            },
            async sendQuery(){

            }
        }
    }
</script>



<style lang="scss">
@import '@/assets/_media.scss';
#overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}
.overlay-auth{
    height: 90%;
    width: 50%;
    @include desktop-above{
        height: 70%;
    }
    @include desktop{
        width: 90%;
    }
    @include mobile{
        width: 100%;
        height: 100%;
    }
}
.overlay{
    border-radius: 40px;
    background-color: var(--dark-middle);
    z-index: 1000;
    max-width: 100%;
    max-height: 100%;
    display: block;
    transition: all 0.3s linear;
    visibility: hidden;
    border: unset;
    outline: unset;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    opacity: 0;
    &[open]{
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
        @include mobile{
            padding: 90px 16px;
        }
        .overlay-header{
            position: absolute;
            right: 15px;
            top: 15px;
        }
        .overlay-body{
            h2{
                color: var(--white);
                margin-bottom: 40px;
                @include mobile{
                    font-size: 32px;
                    line-height: 36px;
                }
            }
            .overlay-body__inner{
                display: flex;
                flex-direction: column;
                align-items: center;
                .overlay__input-form{
                    display: flex;
                    flex-direction: column;
                    .input-form__input{
                        margin-bottom: 24px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                    }
                    label{
                        color: var(--gray);
                        margin-bottom: 8px;
                        padding-left: 30px;
                    }
                }
                .overlay-body__bottom{
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    .overlay-body__bottom-inner{
                        display: flex;
                        justify-content: space-between;
                        @include mobile{
                            flex-direction: column;
                            justify-content: unset;
                        }
                        .overlay-body__bottom-btn{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            @include mobile{
                                order: 10;
                                width: 100%;
                            }
                        }
                    }
                    .overlay-form__error{
                        background: rgba(255, 116, 97, 0.1);
                        color: rgba(255, 116, 97, 1);
                        padding: 8px 20px;
                        border-radius: 24px;
                        margin-top: 20px;
                    }
                    .overlay-body__links{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        @include desktop-above{
                            flex-direction: row;
                        }
                        @include mobile{
                            flex-direction: row;
                            justify-content: space-between;
                        }
                        p{
                            color: var(--gray);
                            margin-right: 8px;
                        }
                        p, a{
                            @include mobile{
                                font-size: 14px;
                                line-height: 24px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>