<template>
  <imobiliaria-row>
    <imobiliaria-col
      :sm="4"
      :md="2">
      <imobiliaria-icon
        class="mt-2"
        size="xl"
        icon="book" />
    </imobiliaria-col>
    <imobiliaria-col
      :sm="20"
      :md="22">
      <imobiliaria-header v-truncate size="sm">
        <imobiliaria-imovel-link :id="imovel.id">{{ imovel.titulo }}</imobiliaria-imovel-link>
      </imobiliaria-header>
      <imobiliaria-p
        v-truncate="2"
        color="regular">
        {{ imovel.resumo }}
      </imobiliaria-p>
    </imobiliaria-col>
  </imobiliaria-row>
</template>

<script>
import ImobiliariaImovelLink from '@/modules/imovel/components/ImovelLink.vue';

export default {
  name: 'ImovelListItem',
  components: {
    ImobiliariaImovelLink,
  },
  props: {
    imovel: {
      type: Object,
      required: true,
    },
  },
};
</script>
