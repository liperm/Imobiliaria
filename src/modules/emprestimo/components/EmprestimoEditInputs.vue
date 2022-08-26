<template>
  <div>
    <biblioteca-form v-if="emprestimoEditVm.emprestimo" :submit="save">
      <div class="form-field mt-4">
        <biblioteca-usuario-select
          ref="usuarioSelect"
          @on-change="onUsuarioChange" />
      </div>
      <div v-for="(imovel, index) in maxImoveis" :key="index" class="form-field mt-4">
        <biblioteca-imovel-select
          ref="imovelSelect"
          @on-change="onImovelChange($event, index)" />
        <biblioteca-button class="btn btn-danger" @click="onRemoverImoveis(index)">
          Excluir Imovel
        </biblioteca-button>
      </div>
      <biblioteca-button @click="onAddImoveis">
        Adicionar Imoveis
      </biblioteca-button>

      <div class="mt-4 mb-3 d--flex justify-content-end">
        <biblioteca-button
          class="btn btn-secondary"
          width="110"
          size="sm"
          @click="goHistoryBack()">
          Cancelar
        </biblioteca-button>
        <biblioteca-button
          native-type="submit"
          class="btn btn-success ms-2"
          width="110"
          size="sm">
          <a v-if="emprestimoEditVm.emprestimo.id">Editar</a>
          <a v-else>Adicionar</a>
        </biblioteca-button>
      </div>
    </biblioteca-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';
import { toastError } from '@/services/toastService';

import ImobiliariaImovelSelect from '@/modules/imovel/components/ImovelSelect.vue';
import ImobiliariaUsuarioSelect from '@/modules/usuario/components/UsuarioSelect.vue';

export default {
  name: 'ImobiliariaEmprestimoEdit',
  components: {
    ImobiliariaImovelSelect,
    ImobiliariaUsuarioSelect,
  },
  inject: ['emprestimoEditVm'],
  data() {
    return {
      value: 1,
      maxImoveis: [],
      imovelErro: false,
    };
  },
  mounted() {
    this.maxImoveis.push(this.value);
  },
  methods: {
    goHistoryBack,
    save() {
      this.$emit('save');
    },
    onImovelChange(imovelId, index) {
      this.emprestimoEditVm.emprestimo.imoveis.forEach(imovel => {
        if (imovel.id === imovelId.id) {
          this.imovelErro = true;
          this.onRemoverImoveis(index);
          toastError('Imovel já existe no empréstimo');
        }
      });
      if (!this.imovelErro) {
        this.emprestimoEditVm.emprestimo.imoveis.push(imovelId);
      }
      this.imovelErro = false;
    },
    onUsuarioChange(usuario) {
      this.emprestimoEditVm.emprestimo.usuario = usuario;
    },
    onAddImoveis() {
      this.value += 1;
      this.maxImoveis.push({ id: this.value });
    },
    onRemoverImoveis(index) {
      this.maxImoveis.splice(index, 1);
      this.emprestimoEditVm.emprestimo.imoveis.splice(index, 1);
    },
  },
};
</script>
