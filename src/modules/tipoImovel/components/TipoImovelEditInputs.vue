<template>
  <div>
    <imobiliaria-form v-if="tipoimovelEditVm.tipoimovel" :submit="save">
      <div class="form-field mt-4">
        <imobiliaria-administrador-select
          ref="administradorSelect"
          @on-change="onAdministradorChange" />
      </div>
      <div v-for="(imovel, index) in maxImoveis" :key="index" class="form-field mt-4">
        <imobiliaria-imovel-select
          ref="imovelSelect"
          @on-change="onImovelChange($event, index)" />
        <imobiliaria-button class="btn btn-danger" @click="onRemoverImoveis(index)">
          Excluir Imovel
        </imobiliaria-button>
      </div>
      <imobiliaria-button @click="onAddImoveis">
        Adicionar Imoveis
      </imobiliaria-button>

      <div class="mt-4 mb-3 d--flex justify-content-end">
        <imobiliaria-button
          class="btn btn-secondary"
          width="110"
          size="sm"
          @click="goHistoryBack()">
          Cancelar
        </imobiliaria-button>
        <imobiliaria-button
          native-type="submit"
          class="btn btn-success ms-2"
          width="110"
          size="sm">
          <a v-if="tipoimovelEditVm.tipoimovel.id">Editar</a>
          <a v-else>Adicionar</a>
        </imobiliaria-button>
      </div>
    </imobiliaria-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';
import { toastError } from '@/services/toastService';

import ImobiliariaImovelSelect from '@/modules/imovel/components/ImovelSelect.vue';
import ImobiliariaAdministradorSelect from '@/modules/administrador/components/AdministradorSelect.vue';

export default {
  name: 'ImobiliariaTipoImovelEdit',
  Components: {
    ImobiliariaImovelSelect,
    ImobiliariaAdministradorSelect,
  },
  inject: ['tipoimovelEditVm'],
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
      this.tipoimovelEditVm.tipoimovel.imoveis.forEach(imovel => {
        if (imovel.id === imovelId.id) {
          this.imovelErro = true;
          this.onRemoverImoveis(index);
          toastError('Imovel já existe no empréstimo');
        }
      });
      if (!this.imovelErro) {
        this.tipoimovelEditVm.tipoimovel.imoveis.push(imovelId);
      }
      this.imovelErro = false;
    },
    onAdministradorChange(administrador) {
      this.tipoimovelEditVm.tipoimovel.administrador = administrador;
    },
    onAddImoveis() {
      this.value += 1;
      this.maxImoveis.push({ id: this.value });
    },
    onRemoverImoveis(index) {
      this.maxImoveis.splice(index, 1);
      this.tipoimovelEditVm.tipoimovel.imoveis.splice(index, 1);
    },
  },
};
</script>
