<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="emprestimo" #content>
      <biblioteca-row class="d-flex align-items-center">
        <biblioteca-col>
          <biblioteca-header>
            <biblioteca-usuario-link :id="emprestimo.usuario.id" target="_blank">
              Usuário: {{ emprestimo.usuario.nome }}
            </biblioteca-usuario-link>
          </biblioteca-header>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            Status: {{ statusInfo[emprestimo.status] }}
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            Data Retirada: {{ formatarData(emprestimo.dataRetirada) }}
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            Imoveis:
          </biblioteca-p>
          <biblioteca-p v-for="imovel in emprestimo.imoveis" :key="imovel" class="biblioteca-u-text--medium">
            <biblioteca-imovel-link :id="imovel.id" target="_blank">
              • {{ imovel.titulo }}
            </biblioteca-imovel-link>
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import moment from 'moment';

import { EMPRESTIMO_ERRORS, EMPRESTIMO_STATUS } from '@/modules/emprestimo/emprestimo.constants';
import { getEmprestimo } from '@/modules/emprestimo/emprestimo.service';
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToEmprestimoNotFound } from '@/modules/emprestimo/emprestimo.routes';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import ImobiliariaUsuarioLink from '@/modules/usuario/components/UsuarioLink.vue';
import ImobiliariaImovelLink from '@/modules/imovel/components/ImovelLink.vue';

export default {
  name: 'EmprestimoViewPage',
  components: {
    ImobiliariaUsuarioLink,
    ImobiliariaImovelLink,
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      emprestimo: null,
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
      getEmprestimo(this.id)
        .then(({ data }) => {
          this.emprestimo = data;
        })
        .catch(err => {
          this.emprestimo = null;
          if (err) {
            goToEmprestimoNotFound(this.$router);
          } else if ((err.response.data.errors === EMPRESTIMO_ERRORS[err.response.status] && err.response.status === 404)) {
            goToEmprestimoNotFound(this.$router);
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
