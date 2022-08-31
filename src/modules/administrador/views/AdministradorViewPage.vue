<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template v-if="administrador" #content>
      <imobiliaria-row class="d-flex align-items-center">
        <imobiliaria-col>
          <imobiliaria-header>
            {{ administrador.nome }}
          </imobiliaria-header>
        </imobiliaria-col>
      </imobiliaria-row>
      <imobiliaria-row>
        <imobiliaria-col>
          <imobiliaria-p class="imobiliaria-u-text--medium">
            {{ administrador.email }}
          </imobiliaria-p>
        </imobiliaria-col>
      </imobiliaria-row>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { ADMINISTRADOR_ERRORS } from '@/modules/administrador/administrador.constants';
// eslint-disable-next-line import/no-cycle
import { goToAdministradorNotFound } from '@/modules/administrador/administrador.routes';
import { toastError } from '@/services/toastService';
import { getAdministrador } from '@/modules/administrador/administrador.service';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaAdministradorViewPage',
  components: {
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      administrador: null,
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
      getAdministrador(this.id)
        .then(data => {
          this.administrador = data.data;
        })
        .catch(err => {
          this.imovel = null;
          if (err) {
            goToAdministradorNotFound(this.$router);
          } else if ((err.response.data.errors === ADMINISTRADOR_ERRORS[err.response.status] && err.response.status === 404)) {
            goToAdministradorNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o imovel');
          }
        });
    },
  },
};
</script>
