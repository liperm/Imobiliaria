import * as imovelResource from '@/modules/imovel/imovel.resource';

export function fetchImoveis() {
  return new Promise((resolve, reject) =>
    imovelResource
      .fetchImoveis()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getImovel(imovelId) {
  return new Promise((resolve, reject) =>
    imovelResource
      .getImovel(imovelId)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveImovel(imovel) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getImovelSaveAction(imovel)(imovel)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function removeImovel(imovel) {
  return new Promise((resolve, reject) =>
    imovelResource
      .removeImovel(imovel.id)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      }));
}

function getImovelSaveAction(imovel) {
  return imovel.id ? imovelResource.updateImovel : imovelResource.createImovel;
}
