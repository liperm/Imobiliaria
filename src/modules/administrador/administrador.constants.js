export const ADMINISTRADORES_URL = Object.freeze({
  path: '/administradores',
  view: {
    name: 'administrador.view',
    path: '/administradores/ver/:id',
  },
  edit: {
    name: 'administrador.edit',
    path: '/administradores/editar/:id',
  },
  create: {
    name: 'administrador.create',
    path: '/administradores/criar',
  },
  notfound: {
    name: 'administrador.notfound',
    path: '/administradores/nao-encontrado',
  },
});

export const ADMINISTRADOR_ERRORS = {
  404: 'ADMINISTRADOR_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
