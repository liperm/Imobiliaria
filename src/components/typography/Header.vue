<template>
  <div :class="getClasses">
    <slot />
  </div>
</template>

<script>
import { sm, md, lg } from '@/components/components.constants';
import { validator } from '@/components/components.validators';

const SIZES = [sm, md, lg];

export default {
  name: 'ImobiliariaHeader',
  props: {
    size: {
      type: String,
      default: lg,
      validator: size => validator(size, ...SIZES),
    },
  },
  computed: {
    getClasses() {
      return [
        'imobiliaria-header',
        `imobiliaria-header--${this.size}`,
      ];
    },
  },
};
</script>
