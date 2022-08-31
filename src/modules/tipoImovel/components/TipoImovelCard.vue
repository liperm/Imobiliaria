<template>
  <imobiliaria-row>
    <imobiliaria-col
      :sm="4"
      :md="2">
      <imobiliaria-icon
        class="mt-2"
        size="xl"
        icon="send" />
    </imobiliaria-col>
    <imobiliaria-col
      :sm="20"
      :md="22">
      <imobiliaria-header v-truncate size="sm">
        <imobiliaria-tipo-imovel-link :id="tipoimovel.id">{{ tipoimovel.administrador.nome }}</imobiliaria-tipo-imovel-link>
      </imobiliaria-header>
      <imobiliaria-p color="regular">
        Quantidade de imoveis: {{ tipoimovel.imoveis.length }}
      </imobiliaria-p>
      <imobiliaria-p color="regular">
        Status: {{ statusInfo[tipoimovel.status] }}
      </imobiliaria-p>
      <imobiliaria-p color="regular">
        Data Retirada: {{ formatarData(tipoimovel.dataRetirada) }}
      </imobiliaria-p>
    </imobiliaria-col>
  </imobiliaria-row>
</template>

<script>
import moment from 'moment';

import { EMPRESTIMO_STATUS } from '@/modules/tipoImovel/tipoImovel.constants';

import ImobiliariaTipoImovelLink from '@/modules/tipoImovel/components/TipoImovelLink.vue';

export default {
  name: 'TipoImovelListItem',
  Components: {
    ImobiliariaTipoImovelLink,
  },
  props: {
    tipoimovel: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      statusInfo: EMPRESTIMO_STATUS,
    };
  },
  methods: {
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },
};
</script>
