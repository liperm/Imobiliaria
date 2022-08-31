import { EMPRESTIMOS_URL } from '@/modules/tipoImovel/tipoImovel.constants';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: EMPRESTIMOS_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...EMPRESTIMOS_URL.view,
        component: () => import('@/modules/tipoImovel/views/TipoImovelViewPage.vue'),
      },
      {
        ...EMPRESTIMOS_URL.edit,
        component: () => import('@/modules/tipoImovel/views/TipoImovelEditPage.vue'),
      },
      {
        ...EMPRESTIMOS_URL.create,
        component: () => import('@/modules/tipoImovel/views/TipoImovelEditPage.vue'),
      },
      {
        ...EMPRESTIMOS_URL.notfound,
        component: () => import('@/modules/tipoImovel/views/TipoImovelNotFound.vue'),
      },
    ],
  },
];

export function goToTipoImovelNotFound($router) {
  $router.push({
    name: EMPRESTIMOS_URL.notfound.name,
  });
}

export function goToOpenTipoImovel($router, tipoimovel) {
  $router.push({
    name: EMPRESTIMOS_URL.view.name,
    params: { id: tipoimovel.id },
  });
}

export function goToCreateTipoImovel($router) {
  $router.push({
    name: EMPRESTIMOS_URL.create.name,
  });
}
