<template>
  <div>
    <imobiliaria-header size="md">Oops!</imobiliaria-header>
    <imobiliaria-header>Aconteceu algo de errado!</imobiliaria-header>
    <imobiliaria-p>Por favor, tente recarregar a página</imobiliaria-p>
    <imobiliaria-button class="btn btn-primary" @click="goToBasePage()">
      Retornar para a Home
    </imobiliaria-button>
  </div>
</template>

<script>
import { goToBasePage } from '@/router/route.service';

export default {
  name: 'ImobiliariaGenericErrorPage',
  methods: {
    goToBasePage,
  },
};
</script>
