<template>
  <imobiliaria-single-content-layout container-size="md">
    <template #content>
      <div class="d-flex align-items--center direction--column">
        <imobiliaria-icon size="xxl" icon="question-octagon" />
        <imobiliaria-header>Tipo Imóvel não encontrado</imobiliaria-header>
        <imobiliaria-p>
          Erro ao localizar o empréstimo.
        </imobiliaria-p>
        <br>
        <imobiliaria-button theme="primary" @click="goToBasePage()">
          Retornar para Home
        </imobiliaria-button>
      </div>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { goToBasePage } from '@/router/route.service';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaTipoImovelNotFoundPage',
  components: {
    ImobiliariaSingleContentLayout,
  },
  methods: {
    goToBasePage,
  },
};
</script>
