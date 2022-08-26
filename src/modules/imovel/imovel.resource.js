import { get, post, put, remove } from '@/helpers/http';

const BASE_PATH = 'imoveis';

export function fetchImoveis() {
  return get(`${BASE_PATH}`);
}

export function getImovel(imovelId) {
  return get(`${BASE_PATH}/${imovelId}`);
}

export function createImovel(imovel) {
  return post(`${BASE_PATH}`, { ...imovel });
}

export function updateImovel(imovel) {
  return put(`${BASE_PATH}/${imovel.id}`, imovel);
}

export function removeImovel(id) {
  return remove(`${BASE_PATH}/${id}`);
}
