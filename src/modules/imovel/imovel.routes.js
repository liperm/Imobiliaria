import { IMOVEIS_URL } from '@/modules/imovel/imovel.constants';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: IMOVEIS_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...IMOVEIS_URL.view,
        component: () => import('@/modules/imovel/views/ImovelViewPage.vue'),
      },
      {
        ...IMOVEIS_URL.edit,
        component: () => import('@/modules/imovel/views/ImovelEditPage.vue'),
      },
      {
        ...IMOVEIS_URL.create,
        component: () => import('@/modules/imovel/views/ImovelEditPage.vue'),
      },
      {
        ...IMOVEIS_URL.notfound,
        component: () => import('@/modules/imovel/views/ImovelNotFound.vue'),
      },
    ],
  },
];

export function goToImovelNotFound($router) {
  $router.push({
    name: IMOVEIS_URL.notfound.name,
  });
}

export function goToOpenImovel($router, imovel) {
  $router.push({
    name: IMOVEIS_URL.view.name,
    params: { id: imovel.id },
  });
}

export function goToCreateImovel($router) {
  $router.push({
    name: IMOVEIS_URL.create.name,
  });
}
