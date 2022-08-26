<template>
  <imobiliaria-row>
    <imobiliaria-col
      :sm="4"
      :md="2">
      <imobiliaria-icon
        class="mt-2"
        size="xl"
        icon="person" />
    </imobiliaria-col>
    <imobiliaria-col
      :sm="20"
      :md="22">
      <imobiliaria-header v-truncate size="sm">
        <imobiliaria-administrador-link :id="administrador.id">{{ administrador.nome }}</imobiliaria-administrador-link>
      </imobiliaria-header>
      <imobiliaria-p
        v-truncate="2"
        color="regular">
        {{ administrador.email }}
      </imobiliaria-p>
    </imobiliaria-col>
  </imobiliaria-row>
</template>

<script>
import imobiliariadministradorLink from '@/modules/administrador/components/AdministradorLink.vue';

export default {
  name: 'AdministradorCard',
  components: {
    imobiliariaAdministradorLink,
  },
  props: {
    administrador: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>
