<template>
  <div>
    <imobiliaria-form v-if="administradorEditVm.administrador" v-slot="{ validate }" :submit="validateUsuario">
      <div class="form-field mt-4">
        <imobiliaria-input
          v-model="administradorEditVm.administrador.nome"
          label="Nome*"
          name="nome"
          type="text"
          rules="required|min:2"
          placeholder="Nome" />
      </div>
      <div class="form-field">
        <imobiliaria-input
          v-model="administradorEditVm.administrador.email"
          label="E-mail*"
          name="e-mail"
          type="email"
          rules="required"
          placeholder="E-mail" />
      </div>
      <imobiliaria-header v-if="administradorEditVm.administrador.id" size="md">
        Informe a senha para alterar:
      </imobiliaria-header>
      <div v-if="!administradorEditVm.administrador.id" class="form-field">
        <imobiliaria-input
          v-model="senha"
          label="Senha*"
          name="senha"
          type="password"
          rules="required|min:6"
          placeholder="Senha" />
      </div>
      <div v-if="!administradorEditVm.administrador.id" class="form-field">
        <imobiliaria-input
          v-model="confirmar_senha"
          label="Confirmar senha*"
          name="confirmar senha"
          type="password"
          rules="required|min:6"
          placeholder="Confirmar senha" />
      </div>
      <div v-if="administradorEditVm.administrador.id" class="form-field">
        <imobiliaria-input
          v-model="senha"
          label="Senha*"
          name="senha"
          type="password"
          rules="min:6"
          placeholder="Senha" />
      </div>
      <div v-if="administradorEditVm.administrador.id" class="form-field">
        <imobiliaria-input
          v-model="confirmar_senha"
          label="Confirmar senha*"
          name="confirmar senha"
          type="password"
          rules="min:6"
          placeholder="Confirmar senha" />
      </div>
      <div class="mt-4 mb-3 d--flex justify-content-end">
        <imobiliaria-button
          class="btn btn-secondary"
          width="110"
          size="sm"
          @click="goHistoryBack()">
          Cancelar
        </imobiliaria-button>
        <imobiliaria-button
          native-type="submit"
          class="btn btn-success ms-2"
          width="110"
          size="sm"
          @click="validate">
          <a v-if="administradorEditVm.administrador.id">Editar</a>
          <a v-else>Adicionar</a>
        </imobiliaria-button>
      </div>
    </imobiliaria-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';
import { toastError } from '@/services/toastService';

export default {
  name: 'ImobiliariaUsuarioEdit',
  inject: ['administradorEditVm'],
  data() {
    return {
      senha: null,
      confirmar_senha: null,
    };
  },
  methods: {
    goHistoryBack,
    save() {
      this.$emit('save');
    },
    validateUsuario() {
      if (this.senha) {
        this.administradorEditVm.administrador.senha = this.senha;
        const specialChars = !!(this.administradorEditVm.administrador.senha.match(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+/) && this.administradorEditVm.administrador.senha.match(/\d+/));

        if (!specialChars) {
          toastError('A senha deve conter caracteres especiais e números');
        } else if (this.administradorEditVm.administrador.senha !== this.confirmar_senha) {
          toastError('As senhas não são iguais');
        } else {
          this.save();
        }
      } else {
        this.save();
      }
    },
  },
};
</script>
