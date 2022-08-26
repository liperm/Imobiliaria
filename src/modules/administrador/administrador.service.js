import * as administradorResource from '@/modules/administrador/administrador.resource';

export function fetchAdministradores() {
  return new Promise((resolve, reject) =>
    administradorResource
      .fetchAdministradores()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getAdministrador(id) {
  return new Promise((resolve, reject) =>
    administradorResource
      .getAdministrador(id)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveAdministrador(administrador) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getAdministradorSaveAction(administrador)(administrador)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function createAdministrador(administrador) {
  return new Promise((resolve, reject) =>
    administradorResource
      .createAdministrador(administrador)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function updateAdministrador(administrador) {
  return new Promise((resolve, reject) =>
    administradorResource
      .updateAdministrador(administrador)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function removeAdministrador(administrador) {
  return new Promise((resolve, reject) =>
    administradorResource
      .removeAdministrador(administrador)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

function getAdministradorSaveAction(administrador) {
  return administrador.id ? administradorResource.updateAdministrador : administradorResource.createAdministrador;
}
