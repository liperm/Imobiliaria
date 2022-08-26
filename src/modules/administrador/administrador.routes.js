import { ADMINISTRADORES_URL } from '@/modules/administrador/administrador.constants';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: ADMINISTRADORES_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...ADMINISTRADORES_URL.view,
        component: () => import('@/modules/administrador/views/AdministradorViewPage.vue'),
      },
      {
        ...ADMINISTRADORES_URL.edit,
        component: () => import('@/modules/administrador/views/AdministradorEditPage.vue'),
      },
      {
        ...ADMINISTRADORES_URL.create,
        component: () => import('@/modules/administrador/views/AdministradorEditPage.vue'),
      },
      {
        ...ADMINISTRADORES_URL.notfound,
        component: () => import('@/modules/administrador/views/AdministradorNotFound.vue'),
      },
    ],
  },
];

export function goToAdministradorNotFound($router) {
  $router.push({
    name: ADMINISTRADORES_URL.notfound.name,
  });
}

export function goToOpenAdministrador($router, administrador) {
  $router.push({
    name: ADMINISTRADORES_URL.view.name,
    params: { id: administrador.id },
  });
}

export function goToCreateAdministrador($router) {
  $router.push({
    name: ADMINISTRADORES_URL.create.name,
  });
}
