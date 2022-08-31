<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <imobiliaria-home-tabs />
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import ImobiliariaHomeTabs from '@/modules/home/components/HomeTabs.vue';

export default {
  name: 'ImobiliariaHomeLayout',
  components: {
    ImobiliariaSingleContentLayout,
    ImobiliariaHomeTabs,
  },
};
</script>
