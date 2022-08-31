<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template v-if="imovel" #content>
      <imobiliaria-row class="d-flex align-items-center">
        <imobiliaria-col>
          <imobiliaria-header>
            {{ imovel.titulo }}
          </imobiliaria-header>
        </imobiliaria-col>
      </imobiliaria-row>
      <imobiliaria-row class="mt-1">
        <imobiliaria-col>
          <imobiliaria-p class="imobiliaria-u-text--medium">
            {{ imovel.resumo }}
          </imobiliaria-p>
        </imobiliaria-col>
      </imobiliaria-row>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { IMOVEL_ERRORS } from '@/modules/imovel/imovel.constants';
import { getImovel } from '@/modules/imovel/imovel.service';
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToImovelNotFound } from '@/modules/imovel/imovel.routes';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImovelViewPage',
  components: {
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      imovel: null,
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
      getImovel(this.id)
        .then(({ data }) => {
          this.imovel = data;
        })
        .catch(err => {
          this.imovel = null;
          if (err) {
            goToImovelNotFound(this.$router);
          } else if ((err.response.data.errors === IMOVEL_ERRORS[err.response.status] && err.response.status === 404)) {
            goToImovelNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o imovel');
          }
        });
    },
  },
};
</script>
