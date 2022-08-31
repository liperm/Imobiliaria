<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <imobiliaria-header>Imoveis</imobiliaria-header>
        <imobiliaria-button @click="onCreateImovel">
          Adicionar Imovel
        </imobiliaria-button>
      </div>
      <table v-if="imovelList && imovelList.length > 0" class="table">
        <tbody>
          <tr v-for="imovel in imovelList" :key="imovel.id">
            <td class="py-3 px-2">
              <imobiliaria-header size="sm" class="d-flex align-item--center">
                <imobiliaria-imovel-link :id="imovel.id">
                  {{ imovel.titulo }}
                </imobiliaria-imovel-link>
              </imobiliaria-header>
              <imobiliaria-p color="regular">
                {{ imovel.resumo }}
              </imobiliaria-p>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <imobiliaria-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <imobiliaria-imovel-link
                      :id="imovel.id"
                      action="edit">
                      <imobiliaria-icon size="sm" icon="pencil" />
                      Editar
                    </imobiliaria-imovel-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteImovel(imovel)">
                      <imobiliaria-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <imobiliaria-modal-delete
                v-if="showModal(imovel)"
                content="Você realmente deseja excluir o imovel?"
                @close="setDeleteImovel(null)"
                @confirm="onDeleteImovel(imovel)">
              </imobiliaria-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <imobiliaria-p v-else class="opacity--50 my--lg">( Sem imoveis )</imobiliaria-p>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { fetchImoveis, removeImovel } from '@/modules/imovel/imovel.service';
import { goToCreateImovel } from '@/modules/imovel/imovel.routes';

import ImobiliariaImovelLink from '@/modules/imovel/components/ImovelLink.vue';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaGerenciarImoveis',
  components: {
    ImobiliariaImovelLink,
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      imovelList: [],
      imovelDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.imovelList = [];
      fetchImoveis()
        .then(data => {
          this.imovelList = data.data;
        })
        .catch(() => {
          this.imovelList = [];
        });
    },
    onCreateImovel() {
      goToCreateImovel(this.$router);
    },
    setDeleteImovel(imovel) {
      this.imovelDelete = imovel;
    },
    showModal(imovel) {
      return this.imovelDelete && this.imovelDelete.id === imovel.id;
    },
    onDeleteImovel(imovel) {
      removeImovel(imovel)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => toastError('Não foi possível excluir o imovel'));
    },
  },
};
</script>
