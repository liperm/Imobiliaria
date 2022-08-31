import authRoutes from '@/modules/auth/auth.routes';
import homeRoutes from '@/modules/home/home.routes';
import errorRoutes from '@/modules/error/error.routes';
import administradorRoutes from '@/modules/administrador/administrador.routes';
import imovelRoutes from '@/modules/imovel/imovel.routes';
import tipoimovelRoutes from '@/modules/tipoImovel/tipoImovel.routes';
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
  ...administradorRoutes,
  ...imovelRoutes,
  ...tipoimovelRoutes,
];
