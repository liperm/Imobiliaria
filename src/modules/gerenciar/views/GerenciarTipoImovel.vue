<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <imobiliaria-header>Tipo Imóvel</imobiliaria-header>
        <imobiliaria-button @click="onCreateTipoImovel">
          Adicionar Tipo Imóvel
        </imobiliaria-button>
      </div>
      <table v-if="tipoimovelList && tipoimovelList.length > 0" class="table">
        <tbody>
          <tr v-for="tipoimovel in tipoimovelList" :key="tipoimovel.id">
            <td class="py-3 px-2">
              <imobiliaria-header size="sm" class="d-flex align-item--center">
                <imobiliaria-tipo-imovel-link :id="tipoimovel.id">
                  Usuário: {{ tipoimovel.administrador.nome }}
                </imobiliaria-tipo-imovel-link>
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
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                v-if="tipoimovel.status != 2"
                trigger="click">
                <imobiliaria-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <a @click="setDevolverTipoImovel(tipoimovel)">
                      <imobiliaria-icon size="sm" icon="send-check" />
                      Devolver
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <imobiliaria-modal-delete
                v-if="showModal(tipoimovel)"
                content="Você realmente deseja devolver o empréstimo?"
                @close="setDevolverTipoImovel(null)"
                @confirm="onDevolverTipoImovel(tipoimovel)">
              </imobiliaria-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <imobiliaria-p v-else class="opacity--50 my--lg">( Sem Tipos de Imóvel )</imobiliaria-p>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import moment from 'moment';

import { toastError } from '@/services/toastService';
import { EMPRESTIMO_STATUS } from '@/modules/tipoImovel/tipoImovel.constants';
import { fetchTipoImoveis, saveTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';
import { goToCreateTipoImovel } from '@/modules/tipoImovel/tipoImovel.routes';

import ImobiliariaTipoImovelLink from '@/modules/tipoImovel/components/TipoImovelLink.vue';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaGerenciarTipoImoveis',
  components: {
    ImobiliariaTipoImovelLink,
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      tipoimovelList: [],
      tipoimovelDevolver: null,
      statusInfo: EMPRESTIMO_STATUS,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.tipoimovelList = [];
      fetchTipoImoveis()
        .then(data => {
          this.tipoimovelList = data.data;
        })
        .catch(() => {
          this.tipoimovelList = [];
        });
    },
    onCreateTipoImovel() {
      goToCreateTipoImovel(this.$router);
    },
    showModal(tipoimovel) {
      return this.tipoimovelDevolver && this.tipoimovelDevolver.id === tipoimovel.id;
    },
    onDevolverTipoImovel(tipoimovel) {
      tipoimovel.status = 2;
      saveTipoImovel(tipoimovel)
        .then(() => {
        })
        .catch(() => toastError('Não foi possível devolver o empréstimo'));
    },
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },
};
</script>
