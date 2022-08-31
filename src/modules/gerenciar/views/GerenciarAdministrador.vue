<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <imobiliaria-header>Usuários</imobiliaria-header>
        <imobiliaria-button @click="onCreateAdministrador">
          Adicionar Usuário
        </imobiliaria-button>
      </div>
      <table v-if="administradorList && administradorList.length > 0" class="table">
        <tbody>
          <tr v-for="administrador in administradorList" :key="administrador.id">
            <td class="py-3 px-2">
              <imobiliaria-header size="sm" class="d-flex align-item--center">
                <imobiliaria-administrador-link :id="administrador.id">
                  {{ administrador.nome }}
                </imobiliaria-administrador-link>
              </imobiliaria-header>
              <imobiliaria-p color="regular">
                {{ administrador.email }}
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
                    <imobiliaria-administrador-link
                      :id="administrador.id"
                      action="edit">
                      <imobiliaria-icon size="sm" icon="pencil" />
                      Editar
                    </imobiliaria-administrador-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteAdministrador(administrador)">
                      <imobiliaria-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <imobiliaria-modal-delete
                v-if="showModal(administrador)"
                content="Você realmente deseja excluir o usuário?"
                @close="setDeleteAdministrador(null)"
                @confirm="onDeleteAdministrador(administrador)">
              </imobiliaria-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <imobiliaria-p v-else class="opacity--50 my--lg">( Sem usuários )</imobiliaria-p>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { fetchAdministradores, removeAdministrador } from '@/modules/administrador/administrador.service';
import { goToCreateAdministrador } from '@/modules/administrador/administrador.routes';

import ImobiliariaAdministradorLink from '@/modules/administrador/components/AdministradorLink.vue';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaGerenciarAdministradores',
  components: {
    ImobiliariaAdministradorLink,
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      administradorList: [],
      administradorDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.administradorList = [];
      fetchAdministradores()
        .then(data => {
          this.administradorList = data.data;
        })
        .catch(() => {
          this.administradorList = [];
        });
    },
    onCreateAdministrador() {
      goToCreateAdministrador(this.$router);
    },
    setDeleteAdministrador(administrador) {
      this.administradorDelete = administrador;
    },
    showModal(administrador) {
      return this.administradorDelete && this.administradorDelete.id === administrador.id;
    },
    onDeleteAdministrador(administrador) {
      removeAdministrador(administrador)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => toastError('Não foi possível excluir o usuário'));
    },
  },
};
</script>
