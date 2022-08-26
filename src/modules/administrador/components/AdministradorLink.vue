<template>
  <router-link :to="to" :target="target">
    <slot />
  </router-link>
</template>
<script>
import { ADMINISTRADORES_URL } from '@/modules/administrador/administrador.constants';

export default {
  name: 'ImobiliariaAdministradorLink',
  props: {
    id: {
      type: Number,
      required: true,
    },
    target: {
      type: String,
      default: '',
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
        name: ADMINISTRADORES_URL[this.action].name,
        path: ADMINISTRADORES_URL[this.action].path,
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>
