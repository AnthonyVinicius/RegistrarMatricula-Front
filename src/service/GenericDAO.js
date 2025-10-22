import apiRequest from '../api/apiService';

class GenericDAO {
  constructor(resourcePath) {
    if (!resourcePath) {
      throw new Error('Caminho do recurso não definido');
    }
    this.resourcePath = resourcePath;
  }

  async getAll() {
    return await apiRequest('get', `/api/v1/${this.resourcePath}`);
  }

  async getById(id) {
    return await apiRequest('get', `/api/v1/${this.resourcePath}/${id}`);
  }

  async insert(object) {
    return await apiRequest('post', `/api/v1/${this.resourcePath}`, object);
  }

  async update(id, object) {
    return await apiRequest('put', `/api/v1/${this.resourcePath}/${id}`, object);
  }

  async delete(id) {
    return await apiRequest('delete', `/api/v1/${this.resourcePath}/${id}`);
  }
}

export default GenericDAO;