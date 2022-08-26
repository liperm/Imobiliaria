<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <biblioteca-header v-if="isEditing">
        Editar Empréstimo
      </biblioteca-header>
      <biblioteca-header v-else>
        Criar Empréstimo
      </biblioteca-header>
      <biblioteca-emprestimo-edit-inputs
        @save="saveEmprestimo" />
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToOpenEmprestimo } from '@/modules/emprestimo/emprestimo.routes';
import { saveEmprestimo } from '@/modules/emprestimo/emprestimo.service';

import ImobiliariaEmprestimoEditInputs from '@/modules/emprestimo/components/EmprestimoEditInputs.vue';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaEmprestimoEditPage',
  components: {
    ImobiliariaEmprestimoEditInputs,
    ImobiliariaSingleContentLayout,
  },
  provide() {
    const emprestimoEditVm = {};
    Object.defineProperty(emprestimoEditVm, 'emprestimo', {
      get: () => this.emprestimo,
    });
    return { emprestimoEditVm };
  },
  data() {
    return {
      emprestimo: null,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
    isEditing() {
      return !!this.emprestimo?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchEmprestimo();
    } else {
      this.emprestimo = {
        usuario: {},
        imoveis: [],
      };
    }
  },
  methods: {
    fetchEmprestimo() {
    },
    saveEmprestimo() {
      saveEmprestimo(this.emprestimo)
        .then(data => {
          goToOpenEmprestimo(this.$router, data || this.emprestimo);
        })
        .catch(() => toastError('Erro ao salvar o empréstimo'));
    },
  },
};
</script>
