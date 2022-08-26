<template>
  <div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>

export default {
  name: 'ImobiliariaApp',
  methods: {
  },
};
</script>

<style lang="scss">
@import '@/scss/app';
</style>
