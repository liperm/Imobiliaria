import { GERENCIAR_URL } from '@/modules/gerenciar/gerenciar.constants';

export default [
  {
    ...GERENCIAR_URL.imovel,
    component: () => import('@/modules/gerenciar/views/GerenciarImovel.vue'),
  },
  {
    ...GERENCIAR_URL.administrador,
    component: () => import('@/modules/gerenciar/views/GerenciarAdministrador.vue'),
  },
  {
    ...GERENCIAR_URL.tipoImovel,
    component: () => import('@/modules/gerenciar/views/GerenciarTipoImovel.vue'),
  },
];

export function goToImovel($router) {
  $router.push({
    name: GERENCIAR_URL.imovel.name,
  });
}

export function goToAdministrador($router) {
  $router.push({
    name: GERENCIAR_URL.administrador.name,
  });
}

export function goToTipoImovel($router) {
  $router.push({
    name: GERENCIAR_URL.tipoImovel.name,
  });
}
