import { get, put, post, remove } from '@/helpers/http';

const BASE_PATH = 'administradores';

export function fetchAdministradores() {
  return get(`${BASE_PATH}`);
}

export function getAdministrador(id) {
  return get(`/${BASE_PATH}/${id}`);
}

export function updateAdministrador(administrador) {
  return put(`/${BASE_PATH}/${administrador.id}`, administrador);
}

export function createAdministrador(administrador) {
  return post(`${BASE_PATH}`, administrador);
}

export function removeAdministrador(administrador) {
  return remove(`/${BASE_PATH}/${administrador.id}`);
}
