<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>
<script>
import { IMOVEIS_URL } from '@/modules/imovel/imovel.constants';

export default {
  name: 'ImobiliariaImovelLink',
  props: {
    id: {
      type: Number,
      required: true,
    },
    action: {
      type: String,
      default: 'view',
      validator(action) {
        return action && ['view', 'edit'].includes(action);
      },
    },
  },
  computed: {
    to() {
      return {
        name: IMOVEIS_URL[this.action].name,
        path: IMOVEIS_URL[this.action].path,
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>
