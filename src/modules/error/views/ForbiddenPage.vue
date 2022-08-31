<template>
  <div class="py--xl">
    <imobiliaria-header>Permissão Negada</imobiliaria-header>
    <p>
      Você não tem acesso a essa página
      <br />
      Sessão expirada
    </p>
    <imobiliaria-button class="btn btn-primary" @click="goToLoginPage()">
      Retornar para o Login
    </imobiliaria-button>
  </div>
</template>

<script>
import { goToLoginPage } from '@/router/route.service';

export default {
  name: 'ImobiliariaForbiddenPage',
  methods: {
    goToLoginPage,
  },
};
</script>
