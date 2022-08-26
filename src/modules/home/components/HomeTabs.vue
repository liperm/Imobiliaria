<template>
  <el-tabs v-model="tabActive" @tab-click="fetch">
    <el-tab-pane label="Últimos Empréstimos" name="emprestimos">
      <div v-if="emprestimoList.length">
        <div
          v-for="emprestimo in emprestimoList"
          :key="emprestimo.id"
          class="mb--xl">
          <biblioteca-emprestimo-card :emprestimo="emprestimo" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem Empréstimos )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos imoveis" name="imoveis">
      <div v-if="imovelList.length">
        <div
          v-for="imovel in imovelList"
          :key="imovel.id"
          class="mb--xl">
          <biblioteca-imovel-card :imovel="imovel" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem imoveis )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos usuários" name="administradors">
      <div v-if="administradorList.length">
        <div
          v-for="administrador in administradorList"
          :key="administrador.id"
          class="mb--xl">
          <biblioteca-administrador-card :administrador="administrador" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem usuários )</biblioteca-p>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { fetchImoveis } from '@/modules/imovel/imovel.service';
import { fetchAdministradors } from '@/modules/administrador/administrador.service';
import { fetchEmprestimos } from '@/modules/emprestimo/emprestimo.service';

import ImobiliariaImovelCard from '@/modules/imovel/components/ImovelCard.vue';
import ImobiliariaAdministradorCard from '@/modules/administrador/components/AdministradorCard.vue';
import ImobiliariaEmprestimoCard from '@/modules/emprestimo/components/EmprestimoCard.vue';

export default {
  name: 'ImobiliariaHomeTabs',
  components: {
    ImobiliariaImovelCard,
    ImobiliariaAdministradorCard,
    ImobiliariaEmprestimoCard,
  },
  data() {
    return {
      tabActive: 'emprestimos',
      imovelList: [],
      administradorList: [],
      emprestimoList: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      if (this.tabActive === 'emprestimos') {
        this.fetchEmprestimos();
      } else if (this.tabActive === 'imoveis') {
        this.fetchImoveis();
      } else if (this.tabActive === 'administradors') {
        this.fetchAdministradors();
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
    fetchAdministradors() {
      fetchAdministradors()
        .then(data => {
          this.administradorList = data.data;
        })
        .catch(() => {
          this.administradorList = [];
        });
    },
    fetchEmprestimos() {
      fetchEmprestimos()
        .then(data => {
          this.emprestimoList = data.data;
        })
        .catch(() => {
          this.emprestimoList = [];
        });
    },
  },
};
</script>
