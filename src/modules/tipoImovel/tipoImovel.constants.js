export const EMPRESTIMOS_URL = Object.freeze({
  path: '/tipo-imoveis',
  view: {
    name: 'tipoimovel.view',
    path: '/tipo-imoveis/ver/:id',
  },
  edit: {
    name: 'tipoimovel.edit',
    path: '/tipo-imoveis/editar/:id',
  },
  create: {
    name: 'tipoimovel.create',
    path: '/tipo-imoveis/criar',
  },
  notfound: {
    name: 'tipoimovel.notfound',
    path: '/tipo-imoveis/nao-encontrado',
  },
});

export const EMPRESTIMO_ERRORS = {
  404: 'EMPRESTIMO_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};

export const EMPRESTIMO_STATUS = {
  0: 'Cancelado',
  1: 'Ativo',
  2: 'Devolvido',
};
