<template>
  <el-container>
    <el-header>
      <imobiliaria-topbar />
    </el-header>
    <el-main>
      <imobiliaria-container :size="containerSize">
        <div class="imobiliaria-single-content-layout">
          <div class="imobiliaria-single-content-layout__main">
            <slot name="content" />
          </div>
        </div>
      </imobiliaria-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ImobiliariaSingleContentLayout',
  props: {
    containerSize: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables/paddings';
@import '@/scss/bootstrap/container';
@import '@/scss/bootstrap/mixins';

.imobiliaria-single-content-layout {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .imobiliaria-single-content-layout__main {
    width: 100%;
    padding-top: $padding-lg;

    @include media-breakpoint-down(md) {
      padding: $padding-lg;
    }
  }
}
</style>
