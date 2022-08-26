import authRoutes from '@/modules/auth/auth.routes';
import homeRoutes from '@/modules/home/home.routes';
import errorRoutes from '@/modules/error/error.routes';
import usuarioRoutes from '@/modules/usuario/usuario.routes';
import imovelRoutes from '@/modules/imovel/imovel.routes';
import emprestimoRoutes from '@/modules/emprestimo/emprestimo.routes';
import gerenciarRoutes from '@/modules/gerenciar/gerenciar.routes';

const routes = [
  {
    path: '*',
    redirect: '/',
  },
];

export default [
  ...routes,
  ...homeRoutes,
  ...authRoutes,
  ...errorRoutes,
  ...gerenciarRoutes,
  ...usuarioRoutes,
  ...imovelRoutes,
  ...emprestimoRoutes,
];
