import { post } from '@/helpers/http';

export function login(username, password) {
  return post('/authenticate', { username, password });
}

export function registrar(administrador) {
  return post('/administradores/criar', administrador);
}
