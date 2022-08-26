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
    <el-tab-pane label="Últimos imovels" name="imovels">
      <div v-if="imovelList.length">
        <div
          v-for="imovel in imovelList"
          :key="imovel.id"
          class="mb--xl">
          <biblioteca-imovel-card :imovel="imovel" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem imovels )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos usuários" name="usuarios">
      <div v-if="usuarioList.length">
        <div
          v-for="usuario in usuarioList"
          :key="usuario.id"
          class="mb--xl">
          <biblioteca-usuario-card :usuario="usuario" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem usuários )</biblioteca-p>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { fetchImovels } from '@/modules/imovel/imovel.service';
import { fetchUsuarios } from '@/modules/usuario/usuario.service';
import { fetchEmprestimos } from '@/modules/emprestimo/emprestimo.service';

import BibliotecaImovelCard from '@/modules/imovel/components/ImovelCard.vue';
import BibliotecaUsuarioCard from '@/modules/usuario/components/UsuarioCard.vue';
import BibliotecaEmprestimoCard from '@/modules/emprestimo/components/EmprestimoCard.vue';

export default {
  name: 'BibliotecaHomeTabs',
  components: {
    BibliotecaImovelCard,
    BibliotecaUsuarioCard,
    BibliotecaEmprestimoCard,
  },
  data() {
    return {
      tabActive: 'emprestimos',
      imovelList: [],
      usuarioList: [],
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
      } else if (this.tabActive === 'imovels') {
        this.fetchImovels();
      } else if (this.tabActive === 'usuarios') {
        this.fetchUsuarios();
      }
    },
    fetchImovels() {
      fetchImovels()
        .then(data => {
          this.imovelList = data.data;
        })
        .catch(() => {
          this.imovelList = [];
        });
    },
    fetchUsuarios() {
      fetchUsuarios()
        .then(data => {
          this.usuarioList = data.data;
        })
        .catch(() => {
          this.usuarioList = [];
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
