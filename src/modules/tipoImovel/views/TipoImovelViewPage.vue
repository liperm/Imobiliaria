<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template v-if="tipoimovel" #content>
      <imobiliaria-row class="d-flex align-items-center">
        <imobiliaria-col>
          <imobiliaria-header>
            <imobiliaria-administrador-link :id="tipoimovel.administrador.id" target="_blank">
              Usuário: {{ tipoimovel.administrador.nome }}
            </imobiliaria-administrador-link>
          </imobiliaria-header>
        </imobiliaria-col>
      </imobiliaria-row>
      <imobiliaria-row class="mt-1">
        <imobiliaria-col>
          <imobiliaria-p class="imobiliaria-u-text--medium">
            Status: {{ statusInfo[tipoimovel.status] }}
          </imobiliaria-p>
        </imobiliaria-col>
      </imobiliaria-row>
      <imobiliaria-row class="mt-1">
        <imobiliaria-col>
          <imobiliaria-p class="imobiliaria-u-text--medium">
            Data Retirada: {{ formatarData(tipoimovel.dataRetirada) }}
          </imobiliaria-p>
        </imobiliaria-col>
      </imobiliaria-row>
      <imobiliaria-row class="mt-1">
        <imobiliaria-col>
          <imobiliaria-p class="imobiliaria-u-text--medium">
            Imoveis:
          </imobiliaria-p>
          <imobiliaria-p v-for="imovel in tipoimovel.imoveis" :key="imovel" class="imobiliaria-u-text--medium">
            <imobiliaria-imovel-link :id="imovel.id" target="_blank">
              • {{ imovel.titulo }}
            </imobiliaria-imovel-link>
          </imobiliaria-p>
        </imobiliaria-col>
      </imobiliaria-row>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import moment from 'moment';

import { EMPRESTIMO_ERRORS, EMPRESTIMO_STATUS } from '@/modules/tipoImovel/tipoImovel.constants';
import { getTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToTipoImovelNotFound } from '@/modules/tipoImovel/tipoImovel.routes';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import ImobiliariaAdministradorLink from '@/modules/administrador/components/AdministradorLink.vue';
import ImobiliariaImovelLink from '@/modules/imovel/components/ImovelLink.vue';

export default {
  name: 'TipoImovelViewPage',
  Components: {
    ImobiliariaAdministradorLink,
    ImobiliariaImovelLink,
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      tipoimovel: null,
      statusInfo: EMPRESTIMO_STATUS,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      getTipoImovel(this.id)
        .then(({ data }) => {
          this.tipoimovel = data;
        })
        .catch(err => {
          this.tipoimovel = null;
          if (err) {
            goToTipoImovelNotFound(this.$router);
          } else if ((err.response.data.errors === EMPRESTIMO_ERRORS[err.response.status] && err.response.status === 404)) {
            goToTipoImovelNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o empréstimo');
          }
        });
    },
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },
};
</script>
