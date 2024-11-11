<template>
        <div
        class="overlay overlay-auth" 
        ref="overlay_auth "
        id="overlay_reg "
        >
        <div class="overlay__inner h-100">
            <div class="overlay-header">
                <btnRoundPage @click="closeModal"/>
            </div>
            <div class="overlay-body h-100">
                <h2 class="h2">Регистрация</h2>
                <section class="overlay-body__inner h-100">
                   <form @submit.prevent="sendQuery" class="overlay__input-form h-100 w-100">
                        <label for="email" class="text-small">Email</label>
                        <inputForm 
                        @changeInput="email = $event"
                        name="email"
                        type="email"
                        placeholder="Введите значение"
                        />
                        <label for="pass" class="text-small">Пароль</label>
                        <inputForm 
                        @changeInput="pass = $event"
                        name="pass"
                        type="password" 
                        placeholder="Введите пароль"
                        />
                        <label for="passRepeat" class="text-small">Пароль ещё раз</label>
                        <inputForm 
                        @changeInput="passRep = $event"
                        name="passRepeat"
                        type="password" 
                        placeholder="Пароль ещё раз"
                        />
                        <div class="overlay-body__bottom w-100">
                            <div class="overlay-body__bottom-inner w-100">
                                <div class="overlay-body__links">
                                    <p class="text-small">У вас есть аккаунт?</p>
                                    <linkPage @click="openModalAuth">Войдите</linkPage>
                                </div>
                                <btnPage 
                                @click="sendQuery" 
                                class="overlay-body__bottom-btn"
                                type="submit"
                                >
                                    <p class="text-normal">Зарегистрироваться</p>
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
    </div>
</template>

<script>
import axios from 'axios';
import { useModalStore } from '@/stores/modals';
    export default {
        data(){
            return {
                email: '',
                pass: '',
                error: '',
                passRep: ''
            }
        },
        methods: {
            openModalAuth(){
                useModalStore().setModalAuth(true);
                useModalStore().setModalReg(false);  
            },
            closeModal(){
                useModalStore().setModalReg(false);
            },
            async sendQuery(){
                if(this.email.length > 2 && this.pass.length > 4 && this.passRep === this.pass){
                    try {
                        const res = await axios.post("https://dist.nd.ru/api/reg", {
                            params: {
                                email: this.email,
                                password: this.pass,
                                confirm_password: this.pass
                        }
                        })
                        console.log('res')
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
        }
    }
</script>



<style lang="scss" scoped>
@import '@/assets/_media.scss';
.overlay{
    .overlay__inner{
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