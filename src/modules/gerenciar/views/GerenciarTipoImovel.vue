<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <biblioteca-header>Imoveis</biblioteca-header>
        <biblioteca-button @click="onCreateImovel">
          Adicionar Imovel
        </biblioteca-button>
      </div>
      <table v-if="imovelList && imovelList.length > 0" class="table">
        <tbody>
          <tr v-for="imovel in imovelList" :key="imovel.id">
            <td class="py-3 px-2">
              <biblioteca-header size="sm" class="d-flex align-item--center">
                <biblioteca-imovel-link :id="imovel.id">
                  {{ imovel.titulo }}
                </biblioteca-imovel-link>
              </biblioteca-header>
              <biblioteca-p color="regular">
                {{ imovel.resumo }}
              </biblioteca-p>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <biblioteca-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <biblioteca-imovel-link
                      :id="imovel.id"
                      action="edit">
                      <biblioteca-icon size="sm" icon="pencil" />
                      Editar
                    </biblioteca-imovel-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteImovel(imovel)">
                      <biblioteca-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <biblioteca-modal-delete
                v-if="showModal(imovel)"
                content="Você realmente deseja excluir o imovel?"
                @close="setDeleteImovel(null)"
                @confirm="onDeleteImovel(imovel)">
              </biblioteca-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <biblioteca-p v-else class="opacity--50 my--lg">( Sem imoveis )</biblioteca-p>
    </template>
  </biblioteca-single-content-layout>
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
