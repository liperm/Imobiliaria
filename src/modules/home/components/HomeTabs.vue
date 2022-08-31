<template>
  <el-tabs v-model="tabActive" @tab-click="fetch">
    <el-tab-pane label="Últimos Tipo de Imovel" name="tipoimoveis">
      <div v-if="tipoimovelList.length">
        <div
          v-for="tipoimovel in tipoimovelList"
          :key="tipoimovel.id"
          class="mb--xl">
          <imobiliaria-tipoimovel-card :tipoimovel="tipoimovel" />
        </div>
      </div>
      <div v-else>
        <imobiliaria-p class="opacity--50 my--md">( Sem Tipo Imovel )</imobiliaria-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos imoveis" name="imoveis">
      <div v-if="imovelList.length">
        <div
          v-for="imovel in imovelList"
          :key="imovel.id"
          class="mb--xl">
          <imobiliaria-imovel-card :imovel="imovel" />
        </div>
      </div>
      <div v-else>
        <imobiliaria-p class="opacity--50 my--md">( Sem imoveis )</imobiliaria-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos usuários" name="administradores">
      <div v-if="administradorList.length">
        <div
          v-for="administrador in administradorList"
          :key="administrador.id"
          class="mb--xl">
          <imobiliaria-administrador-card :administrador="administrador" />
        </div>
      </div>
      <div v-else>
        <imobiliaria-p class="opacity--50 my--md">( Sem usuários )</imobiliaria-p>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { fetchImoveis } from '@/modules/imovel/imovel.service';
import { fetchAdministradores } from '@/modules/administrador/administrador.service';
import { fetchTipoImoveis } from '@/modules/tipoImovel/tipoImovel.service';

import ImobiliariaImovelCard from '@/modules/imovel/components/ImovelCard.vue';
import ImobiliariaAdministradorCard from '@/modules/administrador/components/AdministradorCard.vue';
import ImobiliariaTipoImovelCard from '@/modules/tipoImovel/components/TipoImovelCard.vue';

export default {
  name: 'ImobiliariaHomeTabs',
  Components: {
    ImobiliariaImovelCard,
    ImobiliariaAdministradorCard,
    ImobiliariaTipoImovelCard,
  },
  data() {
    return {
      tabActive: 'tipoimoveis',
      imovelList: [],
      administradorList: [],
      tipoimovelList: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      if (this.tabActive === 'tipoimoveis') {
        this.fetchTipoImoveis();
      } else if (this.tabActive === 'imoveis') {
        this.fetchImoveis();
      } else if (this.tabActive === 'administradores') {
        this.fetchAdministradores();
      }
    },
    fetchImoveis() {
      fetchImoveis()
        .then(data => {
          this.imovelList = data.data;
        })
        .catch(() => {
          this.imovelList = [];
        });
    },
    fetchAdministradores() {
      fetchAdministradores()
        .then(data => {
          this.administradorList = data.data;
        })
        .catch(() => {
          this.administradorList = [];
        });
    },
    fetchTipoImoveis() {
      fetchTipoImoveis()
        .then(data => {
          this.tipoimovelList = data.data;
        })
        .catch(() => {
          this.tipoimovelList = [];
        });
    },
  },
};
</script>
