<template>
  <imobiliaria-navbar>
    <template #right>
      <div class="d-flex align-items--center">
        <imobiliaria-button @click="onImoveis">
          Imóvel
        </imobiliaria-button>
        <imobiliaria-button @click="onTipoImoveis">
          Tipo de Imóvel
        </imobiliaria-button>
        <imobiliaria-button @click="onAdministradores">
          Administrador
        </imobiliaria-button>
        <imobiliaria-button @click="onLogout">
          Sair
        </imobiliaria-button>
      </div>
    </template>
  </imobiliaria-navbar>
</template>

<script>
import { removeCookie } from '@/helpers/cookies/cookie';
import { goToLoginPage } from '@/router/route.service';
import { goToAdministrador, goToImovel, goToTipoImovel } from '@/modules/gerenciar/gerenciar.routes';

export default {
  name: 'ImobiliariaTopbar',
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
    onImoveis() {
      goToImovel(this.$router);
    },
    onTipoImoveis() {
      goToTipoImovel(this.$router);
    },
    onAdministradores() {
      goToAdministrador(this.$router);
    },
  },
};
</script>
