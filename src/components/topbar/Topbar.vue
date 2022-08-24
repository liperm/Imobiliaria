<template>
  <biblioteca-navbar>
    <template #right>
      <div class="d-flex align-items--center">
        <biblioteca-button @click="onLivros">
          Imóvel
        </biblioteca-button>
        <biblioteca-button @click="onEmprestimos">
          Tipo de Imóvel
        </biblioteca-button>
        <biblioteca-button @click="onUsuarios">
          Administrador
        </biblioteca-button>
        <biblioteca-button @click="onLogout">
          Sair
        </biblioteca-button>
      </div>
    </template>
  </biblioteca-navbar>
</template>

<script>
import { removeCookie } from '@/helpers/cookies/cookie';
import { goToLoginPage } from '@/router/route.service';
import { goToAdministrador, goToImovel, goToTipoImovel } from '@/modules/gerenciar/gerenciar.routes';

export default {
  name: 'BibliotecaTopbar',
  data() {
    return {
    };
  },
  methods: {
    removeCookie,
    onLogout() {
      removeCookie('session_id');
      goToLoginPage();
    },
    onLivros() {
      goToAdministrador(this.$router);
    },
    onEmprestimos() {
      goToImovel(this.$router);
    },
    onUsuarios() {
      goToTipoImovel(this.$router);
    },
  },
};
</script>
