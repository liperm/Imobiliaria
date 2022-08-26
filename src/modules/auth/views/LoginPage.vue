<template>
  <imobiliaria-container class="d-flex justify-content-center align-items-center h-100 py--xl">
    <imobiliaria-form v-slot="{ validate }" :submit="submitLogin">
      <div class="text-center mb-3">
        <img
          class="mb-2"
          src="@/assets/images/logo.png"
          alt=""
          width="80" />
        <imobiliaria-header size="md">Imobiliaria</imobiliaria-header>
        <small>Entrar</small>
      </div>
      <div class="mb-3">
        <imobiliaria-input
          v-model="username"
          type="email"
          name="e-mail"
          rules="required|email"
          placeholder="E-mail"
          :focus="true" />
      </div>
      <div class="mb-3">
        <imobiliaria-input
          v-model="password"
          name="senha"
          type="password"
          rules="required|min:6"
          placeholder="Senha" />
      </div>
      <div class="d-grid mb-3">
        <imobiliaria-button
          class="btn btn-primary"
          native-type="submit"
          @click="validate">
          Entrar
        </imobiliaria-button>
      </div>
      <div class="d-grid text-center">
        <p>
          Não possui conta?
          <router-link class="color--primary" to="/registrar">Criar conta</router-link>
        </p>
      </div>
    </imobiliaria-form>
  </imobiliaria-container>
</template>

<script>
import * as authStore from '@/modules/auth/auth.store';
import { toastError } from '@/services/toastService';
import { passwordLogin } from '@/modules/auth/auth.service';
import { goToBasePage } from '@/router/route.service';

export default {
  name: 'ImobiliariaLoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  beforeCreate() {
    if (authStore.getters.getToken()) {
      goToBasePage();
    }
  },
  methods: {
    submitLogin() {
      passwordLogin(this.username, this.password)
        .then(goToBasePage)
        .catch(err => {
          if (err.response.data.message === 'ADMINISTRADOR_INCORRETO') {
            toastError('E-mail e/ou senha incorretos');
          }
        });
    },
  },
};
</script>
<style scoped>
span {
  width: 320px;
}
</style>
