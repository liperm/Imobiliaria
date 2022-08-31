<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <imobiliaria-header v-if="isEditing">
        Editar Tipo de Imóvel
      </imobiliaria-header>
      <imobiliaria-header v-else>
        Criar Tipo de Imóvel
      </imobiliaria-header>
      <imobiliaria-tipo-imovel-edit-inputs
        @save="saveTipoImovel" />
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToOpenTipoImovel } from '@/modules/tipoImovel/tipoImovel.routes';
import { saveTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';

import ImobiliariaTipoImovelEditInputs from '@/modules/tipoImovel/components/TipoImovelEditInputs.vue';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaTipoImovelEditPage',
  components: {
    ImobiliariaTipoImovelEditInputs,
    ImobiliariaSingleContentLayout,
  },
  provide() {
    const tipoimovelEditVm = {};
    Object.defineProperty(tipoimovelEditVm, 'tipoimovel', {
      get: () => this.tipoimovel,
    });
    return { tipoimovelEditVm };
  },
  data() {
    return {
      tipoimovel: null,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
    isEditing() {
      return !!this.tipoimovel?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchTipoImovel();
    } else {
      this.tipoimovel = {};
    }
  },
  methods: {
    fetchTipoImovel() {
    },
    saveTipoImovel() {
      saveTipoImovel(this.tipoimovel)
        .then(data => {
          goToOpenTipoImovel(this.$router, data || this.tipoimovel);
        })
        .catch(() => toastError('Erro ao salvar o empréstimo'));
    },
  },
};
</script>
