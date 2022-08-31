import { get, post, put, remove } from '@/helpers/http';

const BASE_PATH = 'tipos-imoveis';

export function fetchTipoImoveis() {
  return get(`${BASE_PATH}`);
}

export function getTipoImovel(tipoimovelId) {
  return get(`${BASE_PATH}/${tipoimovelId}`);
}

export function createTipoImovel(tipoimovel) {
  return post(`${BASE_PATH}`, { ...tipoimovel });
}

export function updateTipoImovel(tipoimovel) {
  return put(`${BASE_PATH}/${tipoimovel.id}`, tipoimovel);
}

export function removeTipoImovel(id) {
  return remove(`${BASE_PATH}/${id}`);
}
