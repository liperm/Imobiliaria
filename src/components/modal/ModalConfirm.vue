<template>
  <imobiliaria-modal
    ref="modal"
    title="Alerta"
    v-bind="$attrs"
    v-on="$listeners">
    <template #content>
      <div v-if="content !== null">
        {{ content }}
      </div>
    </template>
    <template #footer>
      <imobiliaria-button
        class="btn btn-success"
        size="sm"
        @click="confirm()">
        Confirmar
      </imobiliaria-button>
    </template>
  </imobiliaria-modal>
</template>

<script>
export default {
  name: 'ImobiliariaModalConfirm',
  props: {
    closeAfterConfirm: {
      type: Boolean,
      default: true,
    },
    content: {
      type: String,
      default: null,
    },
  },
  methods: {
    confirm() {
      this.$emit('confirm');
      if (this.closeAfterConfirm) {
        this.$refs.modal.close();
      }
    },
  },
};
</script>
