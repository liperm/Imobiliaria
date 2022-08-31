import * as tipoimovelResource from '@/modules/tipoImovel/tipoImovel.resource';

export function fetchTipoImoveis() {
  return new Promise((resolve, reject) =>
    tipoimovelResource
      .fetchTipoImoveis()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getTipoImovel(tipoimovelId) {
  return new Promise((resolve, reject) =>
    tipoimovelResource
      .getTipoImovel(tipoimovelId)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveTipoImovel(tipoimovel) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getTipoImovelSaveAction(tipoimovel)(tipoimovel)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function removeTipoImovel(tipoimovel) {
  return new Promise((resolve, reject) =>
    tipoimovelResource
      .removeTipoImovel(tipoimovel.id)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      }));
}

function getTipoImovelSaveAction(tipoimovel) {
  return tipoimovel.id ? tipoimovelResource.updateTipoImovel : tipoimovelResource.createTipoImovel;
}
