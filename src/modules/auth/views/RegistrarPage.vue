<template>
  <el-main>
    <imobiliaria-row>
      <imobiliaria-col
        class="text-center mb-3"
        :sm="12"
        :offset="6">
        <img
          class="mb-3"
          src="@/assets/images/logo.png"
          alt=""
          width="80" />
        <imobiliaria-header size="md">Bem-vindo!</imobiliaria-header>
        <small>Por favor, informe os seus dados</small>
      </imobiliaria-col>
    </imobiliaria-row>
    <imobiliaria-row>
      <imobiliaria-col
        class="text-center mb-3"
        :sm="12"
        :offset="6">
        <imobiliaria-form v-slot="{ validate }" :submit="validateAdministrador">
          <imobiliaria-row>
            <imobiliaria-col
              class="text-center mb-3">
              <imobiliaria-input
                v-model="info.nome"
                type="text"
                name="nome"
                rules="required"
                placeholder="Nome"
                :focus="true" />
            </imobiliaria-col>
          </imobiliaria-row>
          <imobiliaria-row>
            <imobiliaria-col
              class="text-center mb-3">
              <imobiliaria-input
                v-model="info.email"
                type="email"
                name="e-mail"
                rules="required|email"
                placeholder="E-mail" />
            </imobiliaria-col>
          </imobiliaria-row>
          <imobiliaria-row>
            <imobiliaria-col
              class="text-center mb-3"
              :sm="12">
              <imobiliaria-input
                v-model="info.senha"
                name="senha"
                type="password"
                rules="required|min:6"
                placeholder="Senha*" />
            </imobiliaria-col>
            <imobiliaria-col
              class="text-center mb-3"
              :sm="12">
              <imobiliaria-input
                v-model="info.confirmar_senha"
                name="confirmar senha"
                type="password"
                rules="required|min:6"
                placeholder="Confirmar senha*" />
            </imobiliaria-col>
          </imobiliaria-row>
          <imobiliaria-row>
            <imobiliaria-col
              class="text-center mb-3">
              <imobiliaria-button
                native-type="submit"
                class="btn btn-dark"
                @click="validate">
                Confirmar
              </imobiliaria-button>
            </imobiliaria-col>
          </imobiliaria-row>
        </imobiliaria-form>
      </imobiliaria-col>
    </imobiliaria-row>
    <imobiliaria-row>
      <imobiliaria-col
        class="text-center mb-3"
        :sm="12"
        :offset="6">
        <div class="d-grid text-center">
          <p>
            Já possui conta?
            <router-link class="color--primary" to="/login">Login</router-link>
          </p>
        </div>
      </imobiliaria-col>
    </imobiliaria-row>
  </el-main>
</template>

<script>
import { registrar } from '@/modules/auth/auth.service';
import { toastError } from '@/services/toastService';
import { goToBasePage } from '@/router/route.service';

export default {
  name: 'ImobiliariaRegistrarPage',
  provide() {
    const infoRegistrarVm = {};
    Object.defineProperty(infoRegistrarVm, 'info', {
      get: () => this.info,
    });
    return { infoRegistrarVm };
  },
  data() {
    return {
      info: {
        nome: null,
        email: null,
        senha: null,
        confirmar_senha: null,
      },
    };
  },
  methods: {
    onRegistrar() {
      registrar(this.info)
        .then(goToBasePage)
        .catch(err => {
          if (err.response.data.message === 'EMAIL_DUPLICADO') {
            toastError('E-mail duplicado');
          }
        });
    },
    validateAdministrador() {
      const specialChars = !!(this.info.senha.match(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+/) && this.info.senha.match(/\d+/));

      if (!specialChars) {
        toastError('A senha deve conter caracteres especiais e números');
      } else if (this.info.senha !== this.info.confirmar_senha) {
        toastError('As senhas não são iguais');
      } else {
        this.onRegistrar();
      }
    },
  },
};
</script>
<style scoped>
span {
  width: 620px;
}
button {
  width:150px;
}
</style>
