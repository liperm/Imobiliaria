<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <imobiliaria-header v-if="isEditing">
        Editar Administrador
      </imobiliaria-header>
      <imobiliaria-header v-else>
        Criar Administrador
      </imobiliaria-header>
      <imobiliaria-administrador-edit-inputs @save="saveAdministrador" />
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { ADMINISTRADOR_ERRORS } from '@/modules/administrador/administrador.constants';
// eslint-disable-next-line import/no-cycle
import { goToOpenAdministrador, goToAdministradorNotFound } from '@/modules/administrador/administrador.routes';
import { saveAdministrador, getAdministrador } from '@/modules/administrador/administrador.service';

import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import ImobiliariaAdministradorEditInputs from '@/modules/administrador/components/AdministradorEditInputs.vue';

export default {
  name: 'ImobiliariaAdministradorEditPage',
  components: {
    ImobiliariaSingleContentLayout,
    ImobiliariaAdministradorEditInputs,
  },
  provide() {
    const administradorEditVm = {};
    Object.defineProperty(administradorEditVm, 'administrador', {
      get: () => this.administrador,
    });
    return { administradorEditVm };
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
    isEditing() {
      return !!this.administrador?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchAdministrador();
    } else {
      this.administrador = {};
    }
  },
  methods: {
    fetchAdministrador() {
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
    saveAdministrador() {
      saveAdministrador(this.administrador)
        .then(data => {
          goToOpenAdministrador(this.$router, data || this.administrador);
        })
        .catch(() => toastError('Erro ao salvar o administrador'));
    },
  },
};
</script>
